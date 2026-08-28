---
title: 开源项目
date: 2026-07-17 10:00:00
type: projects
comments: false
aside: false
---

<div class="projects-hero text-center">
<h1 class="projects-hero-title"><i class="fas fa-layer-group" style="color: #ffa5c8;"></i> 旗舰开源项目全景展厅</h1>
<p class="projects-hero-subtitle">从高并发分布式日志审计、Python 状态机多行探针到 AI 智能研判 Studio，全部工程代码已开源并支持 Docker 一键部署</p>
</div>

<div class="projects-container">

<!-- Project 1: AuditVault -->
<div class="project-card">
<div class="project-header">
<div class="project-icon-box"><i class="fas fa-shield-halved"></i></div>
<div class="project-title-box">
<h2 class="project-name">AuditVault · 企业级高并发分布式日志审计平台</h2>
<div class="project-tech-line">Spring Boot 3 + Redis 7 + MySQL 8 + Apache Kafka + ClickHouse 24.3</div>
</div>
</div>

<div class="project-badges">
<span class="p-badge">Java 21</span>
<span class="p-badge">Spring Boot 3</span>
<span class="p-badge">Kafka KRaft</span>
<span class="p-badge">ClickHouse OLAP</span>
<span class="p-badge">Redis HLL</span>
<span class="p-badge">Docker Compose</span>
</div>

<div class="project-metrics">
<div class="p-metric">
<div class="p-num">&lt; 5ms</div>
<div class="p-label">异步 Webhook 极速摄取 (202 Accepted)</div>
</div>
<div class="p-metric">
<div class="p-num">45x</div>
<div class="p-label">ClickHouse MergeTree 毫秒级直方图加速</div>
</div>
<div class="p-metric">
<div class="p-num">18 MB</div>
<div class="p-label">SXSSF 磁盘滑动窗口 5万行导出 JVM 内存</div>
</div>
<div class="p-metric">
<div class="p-num">12 KB</div>
<div class="p-label">Redis HyperLogLog 固定内存海量基数去重</div>
</div>
</div>

<div class="project-body">
<p>为中大型分布式系统打造的高并发日志审计中枢。首创“非阻塞异步摄取 + 磁盘滑动窗口流式导出 + 列存时序直方图”工业级架构，彻底攻克日志写入堵塞、大文件导出 OOM 与千万级数据聚合慢查询三大技术瓶颈。</p>
</div>

<div class="project-links">
<a href="https://github.com/Emiliamio/java-portfolio" target="_blank" rel="noopener" class="p-btn p-btn-gh"><i class="fab fa-github"></i> GitHub 源码仓库</a>
<a href="/2026/07/17/auditvault-spring-boot-architecture/" class="p-btn p-btn-doc"><i class="fas fa-book-open"></i> 核心架构设计</a>
<a href="/2026/08/27/kafka-clickhouse-ollama-enterprise-distributed-architecture/" class="p-btn p-btn-doc"><i class="fas fa-bolt"></i> 亿级分布式演进</a>
</div>
</div>

<!-- Project 2: LogScope CLI -->
<div class="project-card">
<div class="project-header">
<div class="project-icon-box"><i class="fab fa-python"></i></div>
<div class="project-title-box">
<h2 class="project-name">LogScope CLI · 高性能离线日志解析与异常探针</h2>
<div class="project-tech-line">Python 3.11 + Pandas + 正则表达式 + 有限状态机 (FSM)</div>
</div>
</div>

<div class="project-badges">
<span class="p-badge">Python 3.11</span>
<span class="p-badge">Pandas</span>
<span class="p-badge">有限状态机 (FSM)</span>
<span class="p-badge">时序滑动窗口</span>
<span class="p-badge">Openpyxl</span>
<span class="p-badge">Pytest (46/46)</span>
</div>

<div class="project-metrics">
<div class="p-metric">
<div class="p-num">O(N)</div>
<div class="p-label">FSM 状态机单遍线性扫描复杂度</div>
</div>
<div class="p-metric">
<div class="p-num">100%</div>
<div class="p-label">多行 Java 异常堆栈断裂精准拼接还原</div>
</div>
<div class="p-metric">
<div class="p-num">Rolling</div>
<div class="p-label">Pandas 滑动窗口时序高频爆破检测</div>
</div>
<div class="p-metric">
<div class="p-num">3 种管道</div>
<div class="p-label">格式化 Excel / 动态 HTML / SQL DDL 导出</div>
</div>
</div>

<div class="project-body">
<p>面向企业级离线运维与安全研判的高性能 CLI 探针。针对传统正则无法处理多行 Java 报错的痛点，设计 FSM 状态机实现单遍扫描堆栈归并，结合 Pandas 滑动窗口模型秒级识别暴力破解与敏感路径扫描。</p>
</div>

<div class="project-links">
<a href="https://github.com/Emiliamio/java-portfolio/tree/main/02-log-parser" target="_blank" rel="noopener" class="p-btn p-btn-gh"><i class="fab fa-github"></i> GitHub 源码仓库</a>
<a href="/2026/08/05/python-log-parser-anomaly-detection/" class="p-btn p-btn-doc"><i class="fas fa-terminal"></i> 状态机与算法解析</a>
</div>
</div>

<!-- Project 3: Nexus AI Security Copilot -->
<div class="project-card">
<div class="project-header">
<div class="project-icon-box"><i class="fas fa-brain"></i></div>
<div class="project-title-box">
<h2 class="project-name">Nexus AI Security Copilot · 智能安全研判 Studio</h2>
<div class="project-tech-line">Spring Boot 3 + SSE 流式长连接 + 本地 Ollama 私有化 + 100vw SOC 工作台</div>
</div>
</div>

<div class="project-badges">
<span class="p-badge">Spring Boot 3</span>
<span class="p-badge">SSE 流式推送</span>
<span class="p-badge">Ollama 私有化</span>
<span class="p-badge">CVSS 3.1 定级</span>
<span class="p-badge">100vw SOC Studio</span>
<span class="p-badge">Chart.js 可视化</span>
</div>

<div class="project-metrics">
<div class="p-metric">
<div class="p-num">三级热备</div>
<div class="p-label">云端大模型 &rarr; 本地 Ollama &rarr; 规则引擎</div>
</div>
<div class="p-metric">
<div class="p-num">100% 离线</div>
<div class="p-label">物理隔离隐私盾 (Air-Gapped) 日志不出域</div>
</div>
<div class="p-metric">
<div class="p-num">打字机</div>
<div class="p-label">Server-Sent Events (SSE) 毫秒级流式响应</div>
</div>
<div class="p-metric">
<div class="p-num">一键阻断</div>
<div class="p-label">自动化生成 Nginx WAF / iptables 处置剧本</div>
</div>
</div>

<div class="project-body">
<p>对标 Datadog Log Management 与 Microsoft Security Copilot 的新一代安全遥测 Studio。集成 100vw 全视口双窗格工作台、多维 Facets 动态聚类与 CVSS 3.1 威胁定级，实现从日志监控到 AI 威胁研判的全链路闭环。</p>
</div>

<div class="project-links">
<a href="https://github.com/Emiliamio/java-portfolio/tree/main/03-log-ai-assistant" target="_blank" rel="noopener" class="p-btn p-btn-gh"><i class="fab fa-github"></i> GitHub 源码仓库</a>
<a href="/2026/08/05/ai-log-security-llm-assistant/" class="p-btn p-btn-doc"><i class="fas fa-microchip"></i> AI 研判助手架构</a>
<a href="/2026/08/27/datadog-style-security-copilot-studio/" class="p-btn p-btn-doc"><i class="fas fa-desktop"></i> SOC Studio 实战复盘</a>
</div>
</div>

</div>
