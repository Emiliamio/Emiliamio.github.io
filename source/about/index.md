---
title: 关于我
date: 2026-07-17 10:00:00
comments: true
---

# 👨‍💻 Emiliamio (Mio)

> **Software Engineer & Distributed Systems Architect**  
> 专注于 **高并发分布式系统、安全审计可观测性（Observability）、企业级鉴权防御与 AI 原生工程** 的全栈软件工程师。

---

## 🎯 核心工程信条 (Engineering Philosophy)

> 💡 **"Defensive by Default, Observable by Design, Performance with Zero Compromise."**  
> （**默认安全防御 · 全链路可观测 · 极致性能与零妥协的工程洁癖**）

---

## 🛠️ 核心技术武器库 (Technical Arsenal)

### 1. 后端与分布式架构 (Backend & Distributed Systems)
- **核心语言与框架**：Java 17 / 21、Spring Boot 3、Spring Security 6、Spring Cloud、Netty、MyBatis-Plus、Maven
- **分布式中间件与流处理**：Apache Kafka (KRaft 集群削峰与异步流式缓冲)、线程池背压保护 (`CallerRunsPolicy`)
- **企业级高并发存储**：
  - **MySQL 8.0**：InnoDB 事务隔离、复合覆盖索引 `(timestamp, ip_address)`、深分页优化与大表归档
  - **ClickHouse 24.3**：MergeTree 列式存储引擎、时序分区、LZ4 压缩、千万级数据 24 小时直方图 **< 3ms 秒级聚合 (45x 提速)**
  - **Redis 7.0**：HyperLogLog 伯努利试验（12KB 固定内存海量基数去重）、分布式锁、滑动时间窗口原子限流、JWT 动态 TTL 黑名单

### 2. AI 原生与安全工程 (AI & Cyber Security)
- **大模型工程化集成**：零依赖 JDK 11+ `HttpClient` 异步流式集成、Server-Sent Events (SSE) 逐字打字机推送
- **三级智能多模型热备**：云端大模型 (Claude / DeepSeek) $\rightarrow$ 本地私有化 Ollama (DeepSeek-R1 / Qwen2.5-Coder) $\rightarrow$ 内核专家规则引擎
- **数据合规与安全防线**：100% 物理隔离离线隐私盾（Air-Gapped Privacy）、System Prompt 结构化防注入约束
- **Web 与身份安全**：HttpOnly + SameSite=Strict Cookie 传输、JWT 密码学验签与 Fail-Open 容灾、OWASP Top 10（天然免疫 SQL 注入、XSS、CSRF、路径穿越）
- **威胁研判与自动化响应**：CVSS 3.1 评分矩阵、MITRE ATT&CK 战术链推演、Nginx WAF / iptables 阻断剧本自动生成

### 3. 数据分析与工具链 (Data Analysis & Tooling)
- **Python 数据栈**：Python 3.11+、Pandas 高性能时序处理（Rolling Window 滑动窗口爆破检测）、NumPy
- **状态机与算法设计**：有限状态机 (FSM) 单遍扫描多行 Java 异常堆栈合并算法（$O(N)$ 复杂度）
- **DevOps & 容器化**：Docker、Docker Compose (支持 Standard / Enterprise 多 Profile 编排)、Linux Shell 自动化脚本、Git

### 4. 前端与 SOC 可视化 (Frontend & SOC Visualization)
- **现代前端交互**：100vw 全视口双窗格 SOC Studio 工作台、深色高对比度主题、Chart.js 交互式图表
- **多维动态聚类**：动态 Facets 维度统计、时序直方图滑动缩放 (Brush & Zoom)、上下文日志溯源 (Surrounding Context)

---

## 🏛️ 旗舰开源与工程实践 (Featured Projects)

### 🌟 1. [AuditVault](https://github.com/Emiliamio/java-portfolio) · 企业级高并发日志审计平台
- **技术栈**：Spring Boot 3 + Redis 7 + MySQL 8 + Apache Kafka + ClickHouse
- **核心突破**：
  - 构建高并发非阻塞异步 Webhook 摄取接口（`202 Accepted` 极速返回，响应耗时 < 5ms）；
  - 基于 Apache POI `SXSSFWorkbook(100)` 实现磁盘滑动窗口流式导出，彻底消灭大文件导出 OOM（50,000 行导出 JVM 堆内存稳定在 18MB）；
  - 引入 Kafka KRaft 削峰流与 ClickHouse MergeTree 引擎，实现亿级日志多维分析 45x 毫秒级加速。

### 🐍 2. [LogScope CLI](https://github.com/Emiliamio/java-portfolio) · 高性能离线日志解析与异常探针
- **技术栈**：Python 3.11 + Pandas + 正则表达式 + 有限状态机 (FSM)
- **核心突破**：
  - 攻克多行 Java 异常堆栈断裂难题，通过 FSM 单遍扫描完美复原报错现场；
  - 基于 Pandas 时序滚动窗口构建登录暴力破解与敏感路径扫描检测模型；
  - 打造 Excel（多 Sheet 格式化）、HTML（动态图表）与 SQL 自动化多格式导出管道。

### 🤖 3. [Nexus AI Security Copilot](https://github.com/Emiliamio/java-portfolio) · 智能日志安全威胁研判 Studio
- **技术栈**：Spring Boot 3 + JDK 11 HttpClient + SSE 流式传输 + Ollama 私有化
- **核心突破**：
  - 首创“云端大模型 + 本地 Ollama 私有化 + 内核规则引擎”三级智能热备架构；
  - 实现 100% 离线数据隐私盾（Air-Gapped Privacy Shield），保障核心业务日志不出域；
  - 提供 CVSS 3.1 动态评分、MITRE ATT&CK 攻击链映射与一键生成 WAF 阻断剧本能力。

---

## 📐 工程交付标准与质量准则

1. **100% 自动化测试闭环**：核心服务全量覆盖单元与集成测试（JUnit 5 / Mockito / Pytest，101/101 测试全部绿色通过）；
2. **防御性容灾设计 (Fail-Safe)**：外部依赖（Kafka / Redis / LLM / DB）均配备优雅降级与熔断机制，杜绝雪崩；
3. **严格内存与环境自洁**：流式导出临时文件自动销毁（`dispose()`）、无死锁与内存泄漏隐患；
4. **统一规范与唯一署名**：代码库与提交记录严格保持 `Emiliamio <mio2110767128@163.com>` 全链路一致。

---

## 📬 联系方式与开源生态 (Connect & Links)

- 🐱 **GitHub**：[@Emiliamio](https://github.com/Emiliamio)
- 💼 **Portfolio 代码主仓**：[Emiliamio/java-portfolio](https://github.com/Emiliamio/java-portfolio)
- 📝 **技术博客**：[https://emiliamio.github.io](https://emiliamio.github.io)
- 📧 **电子邮箱**：`mio2110767128@163.com`

---

*“Stay hungry, stay foolish, and write clean, resilient code.”*
