---
title: 开源与商业项目
date: 2026-07-17 10:00:00
type: projects
comments: false
aside: false
---

<div class="projects-hero text-center">
<h1 class="projects-hero-title"><i class="fas fa-layer-group" style="color: #ffa5c8;"></i> 旗舰工程项目全景展厅</h1>
<p class="projects-hero-subtitle">涵盖纯血 Java 21 企业级 AI Agent & RAG 中台、高并发分布式日志审计、Python 状态机探针与 AI 智能研判 Studio</p>
<div style="margin-top: 15px;">
  <a href="/2026/08/31/enterprise-architecture-roadmap-and-matrix/" class="p-btn p-btn-doc" style="background: linear-gradient(135deg, rgba(255, 165, 200, 0.3), rgba(123, 94, 167, 0.4)); border: 1px solid #ffa5c8; font-weight: bold;"><i class="fas fa-map-signs"></i> 点击查看：系统架构全景演进路线图 (Architecture Roadmap)</a>
</div>
</div>

<div class="projects-container">

<!-- Project 1: AgentForge (NEW FLAGSHIP) -->
<div class="project-card" style="border: 1px solid rgba(255, 165, 200, 0.45); box-shadow: 0 4px 20px rgba(255, 165, 200, 0.12);">
<div class="project-header">
<div class="project-icon-box" style="background: linear-gradient(135deg, #ffa5c8, #7b5ea7); color: #fff;"><i class="fas fa-brain"></i></div>
<div class="project-title-box">
<h2 class="project-name">AgentForge (灵眸智枢) · 纯血 Java 21 企业级 AI Agent & 混合 RAG 中台</h2>
<div class="project-tech-line">Java 21 (虚拟线程) + Spring Boot 3.2 + PostgreSQL 16 (pgvector) + Redis 7 + Vue 3.4</div>
</div>
</div>

<div class="project-badges">
<span class="p-badge" style="background: rgba(255, 165, 200, 0.25); border-color: #ffa5c8;">旗舰商业中台</span>
<span class="p-badge">Java 21</span>
<span class="p-badge">pgvector HNSW</span>
<span class="p-badge">RRF 混合召回</span>
<span class="p-badge">Kahn DAG 响应式</span>
<span class="p-badge">JsqlParser AST 租户隔离</span>
<span class="p-badge">Redis 向量语义降本</span>
<span class="p-badge">单测 100% (35/35)</span>
</div>

<div class="project-metrics">
<div class="p-metric">
<div class="p-num">0.00%</div>
<div class="p-label">JsqlParser AST 语法树租户强隔离 跨租户物理越权率</div>
</div>
<div class="p-metric">
<div class="p-num">60%+</div>
<div class="p-label">Redis 向量语义缓存 (余弦 >=0.95) 大模型算力成本降低</div>
</div>
<div class="p-metric">
<div class="p-num">0.5ms</div>
<div class="p-label">高频问答语义缓存命中端到端极速秒级响应</div>
</div>
<div class="p-metric">
<div class="p-num">800 MB</div>
<div class="p-label">装甲流式解析器 (零 OOM + 单页死信 DLQ 容错)</div>
</div>
</div>

<div class="project-body">
<p>专为国内政企、国企信创生态量身打造的纯 Java 21 企业级 AI 智能体编排与三路混合 RAG 知识库中台。首创“JsqlParser AST 编译期租户强隔离 + 密集+稀疏+RRF+Cross-Encoder 三路混合检索 + Kahn 拓扑排序响应式 DAG 引擎 + Redis 向量语义降本”工业级全栈架构，彻底解决企业私有化交付中 Python 框架运维难与多租户越权两大痛点。</p>
</div>

<div class="project-links">
<a href="/about/#📬-联系方式与开源生态-connect--links" class="p-btn p-btn-gh" style="background: linear-gradient(135deg, rgba(123, 94, 167, 0.8), rgba(255, 165, 200, 0.8)); border-color: #ffa5c8; color: #fff;"><i class="fas fa-lock"></i> 商业私有仓库 (获取授权)</a>
<a href="/2026/08/28/agentforge-pure-java-enterprise-rag-architecture/" class="p-btn p-btn-doc"><i class="fas fa-book-open"></i> 全栈架构深度复盘</a>
<a href="/2026/08/28/agentforge-production-rag-anti-vulnerability-and-armor/" class="p-btn p-btn-doc"><i class="fas fa-shield-alt"></i> 生产长尾装甲与避坑指南</a>
<a href="/2026/08/30/agentforge-xinchuang-and-enterprise-delivery-sop/" class="p-btn p-btn-doc"><i class="fas fa-file-contract"></i> 信创与等保交付SOP</a>
</div>
</div>

<!-- Project 2: AuditVault -->
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
<span class="p-badge">MDC TraceId 追踪</span>
<span class="p-badge">WebSocket 威胁推流</span>
<span class="p-badge">Flyway 增量迁移</span>
<span class="p-badge">K8s Helm 编排</span>
<span class="p-badge">单测 100% (54/54)</span>
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
<p>为中大型分布式系统打造的高并发日志审计中枢。首创“非阻塞异步摄取 + 磁盘滑动窗口流式导出 + 列存时序直方图 + 分布式 MDC TraceId 全链路追踪”工业级架构，彻底攻克日志写入堵塞、大文件导出 OOM 与千万级数据聚合慢查询三大技术瓶颈。</p>
</div>

<div class="project-links">
<a href="https://github.com/Emiliamio/java-portfolio" target="_blank" rel="noopener" class="p-btn p-btn-gh"><i class="fab fa-github"></i> GitHub 源码仓库</a>
<a href="/2026/07/17/auditvault-spring-boot-architecture/" class="p-btn p-btn-doc"><i class="fas fa-book-open"></i> 核心架构设计</a>
<a href="/2026/08/27/kafka-clickhouse-ollama-enterprise-distributed-architecture/" class="p-btn p-btn-doc"><i class="fas fa-bolt"></i> 亿级分布式演进</a>
</div>
</div>

<!-- Project 3: LogScope CLI -->
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
<span class="p-badge">34,000+ QPS</span>
<span class="p-badge">Pytest (50/50)</span>
</div>

<div class="project-metrics">
<div class="p-metric">
<div class="p-num">34,000+</div>
<div class="p-label">实测状态机多行解析吞吐量 (QPS 行/秒)</div>
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
<p>面向企业级离线运维与安全研判的高性能 CLI 探针。针对传统正则无法处理多行 Java 报错的痛点，设计 FSM 状态机实现单遍扫描堆栈归并（实测 34,317 QPS），结合 Pandas 滑动窗口模型秒级识别暴力破解与敏感路径扫描。</p>
</div>

<div class="project-links">
<a href="https://github.com/Emiliamio/java-portfolio/tree/main/02-log-parser" target="_blank" rel="noopener" class="p-btn p-btn-gh"><i class="fab fa-github"></i> GitHub 源码仓库</a>
<a href="/2026/08/05/python-log-parser-anomaly-detection/" class="p-btn p-btn-doc"><i class="fas fa-terminal"></i> 状态机与算法解析</a>
</div>
</div>

<!-- Project 4: Nexus AI Security Copilot -->
<div class="project-card">
<div class="project-header">
<div class="project-icon-box"><i class="fas fa-robot"></i></div>
<div class="project-title-box">
<h2 class="project-name">Nexus AI Security Copilot · 智能安全研判 Studio</h2>
<div class="project-tech-line">Spring Boot 3 + SSE 流式长连接 + 本地 Ollama 私有化 + 100vw SOC 工作台</div>
</div>
</div>

<div class="project-badges">
<span class="p-badge">Spring Boot 3</span>
<span class="p-badge">PII 敏感脱敏</span>
<span class="p-badge">SSE 流式推送</span>
<span class="p-badge">Ollama 私有化</span>
<span class="p-badge">CVSS 3.1 定级</span>
<span class="p-badge">100vw SOC Studio</span>
<span class="p-badge">单测 100% (14/14)</span>
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
