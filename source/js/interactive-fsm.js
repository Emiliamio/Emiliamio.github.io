/**
 * LogScope & AuditVault 交互式架构可视化沙盒
 * 纯前端 Canvas / Web 交互组件，让读者在博客中实时体验状态机与威胁熔断机制
 */
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("interactive-architecture-sandbox");
    if (!container) return;

    container.innerHTML = `
    <div style="background: #0f172a; border: 1px solid #1e293b; border-radius: 12px; padding: 20px; color: #f8fafc; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5); margin: 25px 0;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #334155; padding-bottom: 12px; margin-bottom: 15px;">
            <div style="font-weight: bold; font-size: 15px; color: #38bdf8; display: flex; align-items: center; gap: 8px;">
                <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: #10b981; box-shadow: 0 0 8px #10b981;"></span>
                AuditVault & LogScope · 实时架构交互演练沙盒
            </div>
            <div style="font-size: 12px; color: #94a3b8;">纯前端仿真引擎 (Zero Backend)</div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
            <!-- FSM 状态机可视化 -->
            <div style="background: #1e293b; padding: 15px; border-radius: 8px; border: 1px solid #334155;">
                <div style="font-size: 13px; font-weight: bold; color: #cbd5e1; margin-bottom: 10px;">⚡ LogScope FSM 状态机</div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                    <span id="fsm-state-idle" style="padding: 4px 8px; border-radius: 4px; background: #334155; font-size: 11px; color: #94a3b8; transition: all 0.3s;">IDLE</span>
                    <span style="color: #64748b;">&rarr;</span>
                    <span id="fsm-state-header" style="padding: 4px 8px; border-radius: 4px; background: #334155; font-size: 11px; color: #94a3b8; transition: all 0.3s;">HEADER</span>
                    <span style="color: #64748b;">&rarr;</span>
                    <span id="fsm-state-stack" style="padding: 4px 8px; border-radius: 4px; background: #334155; font-size: 11px; color: #94a3b8; transition: all 0.3s;">STACKTRACE</span>
                    <span style="color: #64748b;">&rarr;</span>
                    <span id="fsm-state-emit" style="padding: 4px 8px; border-radius: 4px; background: #334155; font-size: 11px; color: #94a3b8; transition: all 0.3s;">EMIT</span>
                </div>
                <div id="fsm-log-stream" style="background: #090d16; padding: 8px; border-radius: 4px; font-size: 11px; color: #38bdf8; height: 50px; overflow: hidden; display: flex; align-items: center;">
                    [就绪] 点击下方按钮注入测试日志流...
                </div>
            </div>

            <!-- IP 威胁信誉与 Auto-Ban 熔断器 -->
            <div style="background: #1e293b; padding: 15px; border-radius: 8px; border: 1px solid #334155;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <div style="font-size: 13px; font-weight: bold; color: #cbd5e1;">🛡️ IP 威胁信誉度积分</div>
                    <div id="ip-ban-status" style="font-size: 11px; padding: 2px 6px; border-radius: 4px; background: #065f46; color: #6ee7b7;">NORMAL (安全)</div>
                </div>
                <div style="background: #090d16; height: 16px; border-radius: 8px; overflow: hidden; margin-bottom: 8px; position: relative;">
                    <div id="threat-score-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #10b981, #f59e0b, #ef4444); transition: width 0.4s ease;"></div>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 11px; color: #94a3b8;">
                    <span>攻击目标 IP: 198.51.100.77</span>
                    <span>威胁分: <b id="threat-score-val" style="color: #f8fafc;">0</b> / 100 (阈值 80)</span>
                </div>
            </div>
        </div>

        <!-- 交互按钮组 -->
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button id="btn-sim-normal" style="flex: 1; min-width: 130px; background: #2563eb; color: white; border: none; padding: 8px 12px; border-radius: 6px; font-size: 12px; cursor: pointer; font-weight: bold; transition: background 0.2s;">
                🟢 注入普通日志 (200 OK)
            </button>
            <button id="btn-sim-multiline" style="flex: 1; min-width: 130px; background: #7c3aed; color: white; border: none; padding: 8px 12px; border-radius: 6px; font-size: 12px; cursor: pointer; font-weight: bold; transition: background 0.2s;">
                🟣 注入 Java 异常堆栈断裂
            </button>
            <button id="btn-sim-sqli" style="flex: 1; min-width: 130px; background: #dc2626; color: white; border: none; padding: 8px 12px; border-radius: 6px; font-size: 12px; cursor: pointer; font-weight: bold; transition: background 0.2s;">
                🔴 发起 SQL 注入攻击 (+45分)
            </button>
            <button id="btn-sim-reset" style="background: #475569; color: white; border: none; padding: 8px 12px; border-radius: 6px; font-size: 12px; cursor: pointer; transition: background 0.2s;">
                ↺ 重置沙盒
            </button>
        </div>
    </div>
    `;

    let threatScore = 0;
    const states = ["idle", "header", "stack", "emit"];

    function setActiveState(activeState) {
        states.forEach(s => {
            const el = document.getElementById("fsm-state-" + s);
            if (!el) return;
            if (s === activeState) {
                el.style.background = "#38bdf8";
                el.style.color = "#0f172a";
                el.style.fontWeight = "bold";
                el.style.boxShadow = "0 0 10px #38bdf8";
            } else {
                el.style.background = "#334155";
                el.style.color = "#94a3b8";
                el.style.fontWeight = "normal";
                el.style.boxShadow = "none";
            }
        });
    }

    function updateThreatScore(delta) {
        threatScore = Math.max(0, Math.min(100, threatScore + delta));
        const bar = document.getElementById("threat-score-bar");
        const val = document.getElementById("threat-score-val");
        const status = document.getElementById("ip-ban-status");

        if (bar) bar.style.width = threatScore + "%";
        if (val) val.innerText = threatScore;

        if (status) {
            if (threatScore >= 80) {
                status.innerText = "🚨 AUTO-BANNED (403 熔断)";
                status.style.background = "#991b1b";
                status.style.color = "#fecaca";
            } else if (threatScore >= 40) {
                status.innerText = "⚠️ SUSPICIOUS (可疑)";
                status.style.background = "#92400e";
                status.style.color = "#fde68a";
            } else {
                status.innerText = "NORMAL (安全)";
                status.style.background = "#065f46";
                status.style.color = "#6ee7b7";
            }
        }
    }

    document.getElementById("btn-sim-normal")?.addEventListener("click", () => {
        const stream = document.getElementById("fsm-log-stream");
        if (threatScore >= 80) {
            stream.innerHTML = `<span style="color: #ef4444;">[403 Forbidden] IP 198.51.100.77 已被自动熔断，请求直接拦截！</span>`;
            return;
        }
        setActiveState("header");
        stream.innerHTML = `<span style="color: #10b981;">2026-09-02 15:30:00 192.168.1.50 admin LOGIN SUCCESS (202 Accepted)</span>`;
        setTimeout(() => setActiveState("emit"), 300);
        setTimeout(() => setActiveState("idle"), 700);
    });

    document.getElementById("btn-sim-multiline")?.addEventListener("click", () => {
        const stream = document.getElementById("fsm-log-stream");
        setActiveState("header");
        stream.innerHTML = `<span style="color: #a855f7;">[HEADER] java.lang.NullPointerException: user not found</span>`;
        setTimeout(() => {
            setActiveState("stack");
            stream.innerHTML = `<span style="color: #c084fc;">[STACK] \tat com.sample.OrderService.create(OrderService.java:42)</span>`;
        }, 400);
        setTimeout(() => {
            setActiveState("emit");
            stream.innerHTML = `<span style="color: #38bdf8;">[EMIT] 堆栈精准归并完成，耗时 0.02ms，推入 ClickHouse</span>`;
        }, 800);
        setTimeout(() => setActiveState("idle"), 1300);
    });

    document.getElementById("btn-sim-sqli")?.addEventListener("click", () => {
        const stream = document.getElementById("fsm-log-stream");
        setActiveState("header");
        stream.innerHTML = `<span style="color: #ef4444;">[SQLi DETECTED] Payload: ' OR '1'='1 -- WebSocket 推流已触发！</span>`;
        updateThreatScore(45);
        setTimeout(() => setActiveState("emit"), 400);
        setTimeout(() => setActiveState("idle"), 900);
    });

    document.getElementById("btn-sim-reset")?.addEventListener("click", () => {
        threatScore = 0;
        updateThreatScore(0);
        setActiveState("idle");
        const stream = document.getElementById("fsm-log-stream");
        if (stream) stream.innerHTML = `[就绪] 沙盒已重置，请点击按钮进行交互演练...`;
    });
});
