---
title: 关于我
date: 2026-07-17 10:00:00
comments: true
---

# 👨‍💻 Emiliamio (Mio)

> **Full-Stack Software Engineer & Systems Developer**  
> 具备端到端（End-to-End）系统构建与工程闭环能力的全栈软件工程师。专注于 **Java 企业级高并发后端、现代前端交互与可视化、分布式存储中间件、Python 数据处理与 AI 工程化**，追求扎实的底层原理、严谨的工程规范与极致的系统效能。

---

## 🎯 核心工程信条 (Engineering Philosophy)

> 💡 **"End-to-End Ownership, Resilient by Architecture, Performant by Design."**  
> （**端到端全链路闭环 · 架构高可用容灾 · 极致性能与严谨规范**）

---

## 🛠️ 全栈技术全景 (Full-Stack Technical Arsenal)

### 1. 核心后端与高并发分布式架构 (Backend & Distributed Systems)
- **核心语言与框架**：Java 17 / 21、Spring Boot 3、Spring Security 6、Spring Cloud、Netty、MyBatis-Plus、Maven
- **分布式中间件与流处理**：Apache Kafka (KRaft 集群削峰与异步流式缓冲)、线程池背压流控保护 (`CallerRunsPolicy`)
- **多引擎高性能存储体系**：
  - **MySQL 8.0**：InnoDB 事务隔离、复合覆盖索引 `(timestamp, ip_address)`、深分页优化与大表归档
  - **ClickHouse 24.3**：MergeTree 列式存储引擎、时序分区、LZ4 压缩、千万级数据 24 小时直方图 **< 3ms 秒级聚合 (45x 提速)**
  - **Redis 7.0**：HyperLogLog 伯努利试验（12KB 固定内存海量基数去重）、分布式锁、滑动时间窗口原子限流、JWT 动态 TTL 黑名单

### 2. 现代前端、数据可视化与交互工程 (Frontend & UI Engineering)
- **企业级工作台与交互**：100vw 全视口双窗格 Studio 工作台设计、深色高对比度主题系统、现代响应式布局
- **多维数据可视化**：Chart.js 交互式图表、时序直方图滑动缩放 (Brush & Zoom)、动态 Facets 维度聚类统计
- **全链路前后端联调**：RESTful API 契约设计、Server-Sent Events (SSE) 逐字打字机流式推送、Token/Cookie 安全传输

### 3. Python 数据分析、算法与工具链 (Data Science & Tooling)
- **高性能数据处理**：Python 3.11+、Pandas 高性能时序处理（Rolling Window 滑动窗口统计）、NumPy
- **状态机与算法设计**：有限状态机 (FSM) 单遍扫描多行异常堆栈合并算法（$O(N)$ 线性复杂度）
- **多端数据导出管道**：自动化生成专业格式化 Excel (多 Sheet / 自动列宽)、交互式 HTML 动态报表与标准 SQL 导入脚本

### 4. AI 原生工程化、安全防护与 DevOps (AI, Security & DevOps)
- **大模型工程化落地**：零依赖 JDK 11+ `HttpClient` 异步流式集成、云端模型与本地私有化 Ollama 混合智能路由
- **系统安全与防御体系**：OWASP Top 10 防护、JWT 密码学验签与 Fail-Open 容灾、HttpOnly + SameSite 安全传输、离线数据隐私盾
- **容器化与工程交付**：Docker、Docker Compose 多环境编排 (Standard / Enterprise Profiles)、Linux Shell 自动化脚本、Git

---

## 🏛️ 旗舰开源与工程实践 (Featured Projects)

### 🌟 1. [AuditVault](https://github.com/Emiliamio/java-portfolio) · 企业级高并发日志审计与遥测平台
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

### 🤖 3. [Nexus AI Security Copilot](https://github.com/Emiliamio/java-portfolio) · 智能日志安全研判 Studio
- **技术栈**：Spring Boot 3 + JDK 11 HttpClient + SSE 流式传输 + Ollama 私有化 + 现代前端工作台
- **核心突破**：
  - 打造“云端大模型 + 本地 Ollama 私有化 + 内核规则引擎”三级智能热备架构；
  - 实现 100% 离线数据隐私盾（Air-Gapped Privacy Shield），保障核心业务日志不出域；
  - 结合 100vw 全视口 SOC Studio 前端工作台，提供实时威胁流式研判与一键 WAF 阻断剧本生成。

---

## 📐 工程交付标准与质量准则

1. **100% 自动化测试闭环**：核心服务全量覆盖单元与集成测试（JUnit 5 / Mockito / Pytest，101/101 测试全部绿色通过）；
2. **高可用容灾与优雅降级 (Fail-Safe)**：外部依赖（Kafka / Redis / LLM / DB）均配备优雅降级与熔断机制，杜绝系统雪崩；
3. **严格内存管理与自洁机制**：流式导出临时文件自动销毁（`dispose()`），严控资源占用与无死锁保证；
4. **统一规范与唯一署名**：代码库与提交记录严格保持 `Emiliamio <mio2110767128@163.com>` 全链路一致。

---

## 📬 联系方式与开源生态 (Connect & Links)

- 🐱 **GitHub**：[@Emiliamio](https://github.com/Emiliamio)
- 💼 **Portfolio 代码主仓**：[Emiliamio/java-portfolio](https://github.com/Emiliamio/java-portfolio)
- 📝 **技术博客**：[https://emiliamio.github.io](https://emiliamio.github.io)
- 📧 **电子邮箱**：`mio2110767128@163.com`

---

*“Stay hungry, stay foolish, and write clean, resilient code.”*
