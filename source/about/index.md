---
title: 关于我
date: 2026-07-17 10:00:00
comments: false
aside: false
---

# 👨‍💻 Emiliamio (Mio)

> **Full-Stack Software Engineer & Systems Developer**  
> 具备端到端（End-to-End）系统构建与工程闭环能力的全栈软件工程师。专注于 **Java 企业级高并发后端、AI 原生工程化 (RAG & Agent)、分布式存储中间件、现代前端交互与可视化、Python 数据处理与算法**，追求扎实的底层原理、严谨的工程规范与极致的系统效能。

---

## 🎯 核心工程信条 (Engineering Philosophy)

> 💡 **"End-to-End Ownership, Resilient by Architecture, Performant by Design."**  
> （**端到端全链路闭环 · 架构高可用容灾 · 极致性能与严谨规范**）

---

## 🛠️ 全栈技术全景 (Full-Stack Technical Arsenal)

### 1. 核心后端、AI 原生中台与高并发分布式架构 (Backend & AI Architecture)
- **核心语言与框架**：Java 21 (虚拟线程 LTS)、Spring Boot 3.2、Spring Security 6、MyBatis-Plus、Sa-Token
- **AI Agent 与混合 RAG 中台**：
  - **三路混合检索**：`pgvector` 稠密向量 HNSW + `tsvector` 稀疏全文分词 + **RRF (倒数排名融合算法)** + Cross-Encoder 交叉重排
  - **工作流编排调度**：基于 **Kahn 拓扑排序算法** 的响应式 DAG 并发执行引擎 (Project Reactor / Flux)
  - **安全与算力降本**：**JsqlParser SQL AST 编译期租户物理强隔离**（0% 越权）、**Redis 向量语义降本缓存**（余弦 $\ge 0.95$ 秒回，降低 60% 算力费）
- **多引擎高性能存储体系**：
  - **PostgreSQL 16 (pgvector)**：1536 维向量 HNSW 索引、GIN 倒排索引、结构化元数据 JSONB
  - **MySQL 8.0**：InnoDB 事务隔离、复合覆盖索引 `(timestamp, ip_address)`、深分页优化与大表归档
  - **ClickHouse 24.3**：MergeTree 列式存储引擎、时序分区、LZ4 压缩、千万级数据 24 小时直方图 **< 3ms 秒级聚合 (45x 提速)**
  - **Redis 7.0**：向量语义缓存、HyperLogLog 伯努利试验（12KB 固定内存海量基数去重）、分布式锁、滑动时间窗口原子限流、JWT 动态 TTL 黑名单

### 2. 现代前端、数据可视化与交互工程 (Frontend & UI Engineering)
- **企业级工作台与交互**：Vue 3.4 + Vite 5 + TailwindCSS、100vw 全视口双窗格 Studio 工作台设计、深色高对比度主题系统
- **普通员工极简 Copilot**：0 门槛拖拽即读、业务快捷胶囊、句子级精准溯源高亮与 Word/Excel 一键导出公文排版
- **微前端与挂件集成**：Shadow DOM 物理样式隔离可嵌入式智能体悬浮挂件 (`agentforge-widget.js`)

### 3. Python 数据分析、算法与工具链 (Data Science & Tooling)
- **高性能数据处理**：Python 3.11+、Pandas 高性能时序处理（Rolling Window 滑动窗口统计）、NumPy
- **状态机与算法设计**：有限状态机 (FSM) 单遍扫描多行异常堆栈合并算法（$O(N)$ 线性复杂度）
- **多端数据导出管道**：自动化生成专业格式化 Excel (多 Sheet / 自动列宽)、交互式 HTML 动态报表与标准 SQL 导入脚本

### 4. 生产级防御装甲与 DevOps (Security, Armor & DevOps)
- **长尾工程装甲**：800MB 破损文件流式解析 (零 OOM + DLQ 死信单页隔离)、老旧脱网机纯 Java 离线向量引擎、大模型残缺 JSON 栈式智能修复、DFA 毫秒级敏感词安全过滤
- **系统安全与合规体系**：等保三级安全白皮书、金融级 PII 双向可逆脱敏、OWASP Top 10 防护、离线数据隐私盾
- **容器化与工程交付**：Docker、Docker Compose 多环境编排、Zero-DBA 数据库自动初始化建表灌数、Linux Shell 脚本、Git

<div class="tech-radar-card" style="margin: 30px 0 10px 0; padding: 25px 20px 20px; background: rgba(26, 16, 53, 0.7); border: 1px solid rgba(255, 158, 197, 0.3); border-radius: 12px;">
  <h3 style="text-align: center; color: #ffffff; margin-top: 0; font-size: 1.25rem;"><i class="fas fa-chart-pie" style="color: #ffa5c8;"></i> 全栈技术全景能力雷达 (Full-Stack Competence Radar)</h3>
  <div style="max-width: 500px; margin: 0 auto; padding: 10px 0;">
    <canvas id="techRadarCanvas" width="480" height="380"></canvas>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById('techRadarCanvas');
  if (!canvas) return;
  new Chart(canvas, {
    type: 'radar',
    data: {
      labels: [
        'Java后端 & 高并发架构',
        'AI Agent & 三路混合RAG',
        '分布式存储 (pgvector/Kafka/Redis)',
        '现代前端 & 极简Copilot门户',
        'Python数据处理 & FSM算法',
        'DevOps容器化 & 生产级装甲防御'
      ],
      datasets: [{
        label: '技能熟练度 & 工程实战深度 (%)',
        data: [98, 96, 94, 90, 88, 92],
        fill: true,
        backgroundColor: 'rgba(255, 165, 200, 0.22)',
        borderColor: '#ffa5c8',
        pointBackgroundColor: '#ffffff',
        pointBorderColor: '#ffa5c8',
        pointHoverBackgroundColor: '#ffa5c8',
        pointHoverBorderColor: '#ffffff',
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 25,
            display: false,
            backdropColor: 'transparent'
          },
          grid: {
            color: 'rgba(255, 165, 200, 0.18)'
          },
          angleLines: {
            color: 'rgba(255, 165, 200, 0.22)'
          },
          pointLabels: {
            color: '#e0d0f0',
            font: {
              size: 12.5,
              weight: 'bold'
            }
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: '#c8b8e8',
            font: { size: 12 }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(26, 16, 53, 0.95)',
          titleColor: '#ffa5c8',
          bodyColor: '#ffffff',
          borderColor: 'rgba(255, 165, 200, 0.35)',
          borderWidth: 1,
          padding: 8,
          callbacks: {
            label: function(context) {
              return ' 综合评分: ' + context.raw + '%';
            }
          }
        }
      }
    }
  });
});
</script>

---

## 🏛️ 旗舰项目与核心系统演进 (Featured Systems)

### 🌟 1. [AgentForge (灵眸智枢)](https://github.com/Emiliamio/agent-forge) · 纯血 Java 21 企业级 AI Agent & 混合 RAG 中台
- **技术栈**：Java 21 (虚拟线程) + Spring Boot 3.2 + PostgreSQL 16 (pgvector) + Redis 7 + Vue 3.4
- **核心突破**：
  - **JsqlParser SQL AST 编译期租户强隔离**：编译层递归强行注入 `tenant_id`，物理越权率 **0.00%**；
  - **三路混合 RAG 与重排**：密集 HNSW + 稀疏 tsvector BM25 + RRF 融合 + Cross-Encoder 二次精排；
  - **Kahn 拓扑排序 DAG 响应式引擎**：无锁高并发分层调度 9 大反应式节点；
  - **Anthropic MCP 原生协议客户端**：原生支持 JSON-RPC 2.0 规范，直连全球上千个 MCP Server 工具生态；
  - **RAG 事实性与幻觉评估护栏**：`RagGroundingEvaluator` 实时比对生成断言与知识分块匹配度，自动防范模型幻觉；
  - **DeepSeek-R1 结构化 SSE 事件分发**：`StructuredSseStreamDispatcher` 实现 `<think>` 思维链流式与正式内容清晰分流；
  - **企业级 Prompt 注入对抗护栏**：`PromptInjectionGuard` 识别防御系统提示词窃取、角色越狱与定界符逃逸；
  - **LangSmith 级全链路拓扑 Trace**：`AgentExecutionTracer` 树状 Span 瀑布流追踪与 Token 成本实时精算；
  - **Redis 向量语义降本 60% 缓存**：高频问答 0.5ms 秒级响应，大幅削减企业算力账单；
  - **生产装甲自愈防御**：800MB 破损流式解析、脱网老旧机纯 Java 向量引擎、大模型残缺 JSON 栈式修复，**40 项单测 100% 通过**。

### 🛡️ 2. [AuditVault](https://github.com/Emiliamio/java-portfolio) · 企业级高并发日志审计与遥测平台
- **技术栈**：Spring Boot 3 + Redis 7 + MySQL 8 + Apache Kafka + ClickHouse + Resilience4j + Caffeine
- **核心突破**：
  - 构建高并发非阻塞异步 Webhook 摄取接口（`202 Accepted` 极速返回，响应耗时 < 5ms）；
  - **金融合规入库级 PII 实时脱敏装甲**：`PiiDataMasker` 在日志持久化前切面不可逆遮蔽凭证、手机号、身份证与银行卡；
  - **ClickHouse 小时级物化预聚合时序直方图**：支持千万级日志小时级预聚合查询与平滑回退，保障报表零抖动；
  - **多通道告警分发与防风暴中心**：`AlertDispatcherService` 联动飞书互动卡片、钉钉 Markdown 与企微，内置 5 分钟同源 IP 告警降噪；
  - **冷热分层数据生命周期 (ILM)**：`DataLifecycleService` 划分热/温/冷存储，超期日志批量物理安全淘汰；
  - **高可用容灾与近源缓存**：Resilience4j 动态滑动窗口熔断与本地 WAL 降级缓冲，Caffeine 50ns L1 堆缓存 + Redis L2 双级缓存；
  - 基于 Apache POI `SXSSFWorkbook(100)` 实现磁盘滑动窗口流式导出，消灭大文件导出 OOM（50,000 行 JVM 堆内存稳定在 18MB）；
  - 引入 Kafka KRaft 削峰流与 ClickHouse MergeTree 引擎，实现亿级日志多维分析 45x 毫秒级加速，**65 项单测 100% 通过**。

### 🐍 3. [LogScope CLI](https://github.com/Emiliamio/java-portfolio) · 高性能离线日志解析与异常探针
- **技术栈**：Python 3.11 + Pandas + 正则表达式 + 有限状态机 (FSM) + Parquet + DuckDB
- **核心突破**：
  - **实时流式日志监听探针**：`TailWatcher` 支持类 `tail -f` 增量行监听，边状态机解析边推送到 AuditVault；
  - 攻克多行 Java 异常堆栈断裂难题，通过 FSM 单遍扫描完美复原报错现场；
  - **列存与单机即席分析**：Apache Parquet 85% 高压缩比列存与 DuckDB 嵌入式内存即席分析；
  - **零拷贝与多核并行**：`mmap` 内存映射结合多核分块解析，实测吞吐量达 **34,317 QPS**；
  - 基于 Pandas 时序滚动窗口构建登录暴力破解与敏感路径扫描检测模型；
  - 打造 Excel（多 Sheet 格式化）、HTML（动态图表）、Parquet 与 SQL 自动化多格式导出管道，**60 项测试 100% 通过**。

### 🤖 4. [Nexus AI Security Copilot](https://github.com/Emiliamio/java-portfolio) · 智能日志安全研判 Studio
- **技术栈**：Spring Boot 3 + JDK 11 HttpClient + SSE 流式传输 + Ollama 私有化 + 边缘向量化 + 现代前端工作台
- **核心突破**：
  - **双中台跨系统协同流水线**：`IncidentInvestigationPipeline` 自动接收 AuditVault SOC 告警，执行 PII 脱敏、特征比对并向 AgentForge 生成协同处置工单；
  - **边缘特征向量化与语义缓存**：纯 CPU 2ms 提取 64 维特征向量，`SemanticDiagnosisCache` 相似攻击 0 Token 5ms 秒级命中；
  - 打造“云端大模型 + 本地 Ollama 私有化 + 内核规则引擎”三级智能热备架构；
  - 实现 100% 离线数据隐私盾（Air-Gapped Privacy Shield），保障核心业务日志不出域；
  - 结合 100vw 全视口 SOC Studio 前端工作台，提供实时威胁流式研判与一键 WAF 阻断剧本生成，**26 项单测 100% 通过**。

---

## 📐 工程交付标准与质量准则

1. **100% 自动化测试闭环**：全栈全生态核心服务覆盖全量单元与集成测试（**全生态 196 项自动化测试 100% 绿灯真实通过**，0 Failures, 0 Skips）；
2. **高可用容灾与优雅降级 (Fail-Safe)**：外部依赖（Kafka / Redis / LLM / DB）均配备优雅降级与熔断机制，杜绝系统雪崩；
3. **严格内存管理与自洁机制**：流式导出临时文件自动销毁（`dispose()`），严控资源占用与无死锁保证；
4. **统一规范与唯一署名**：代码库与提交记录严格保持 `Emiliamio <mio2110767128@163.com>` 全链路一致。

---

## 📬 联系方式与开源生态 (Connect & Links)

- 🐱 **GitHub**：[@Emiliamio](https://github.com/Emiliamio)
- 💼 **AgentForge 商业底座仓库**：[Emiliamio/agent-forge](https://github.com/Emiliamio/agent-forge)
- 📦 **Portfolio 代码主仓**：[Emiliamio/java-portfolio](https://github.com/Emiliamio/java-portfolio)
- 📝 **技术博客**：[https://emiliamio.github.io](https://emiliamio.github.io)
- 📧 **电子邮箱**：`mio2110767128@163.com`

---

*“Stay hungry, stay foolish, and write clean, resilient code.”*
