> **🌐 中文翻译版（非官方）** ｜ 英文原版：[ripienaar/free-for-dev](https://github.com/ripienaar/free-for-dev) · [free-for.dev](https://free-for.dev)
>
> 本译本由社区维护，版权归原作者及全体贡献者所有；所有服务条目以英文原版为准。如发现内容过时或不一致，请以[上游仓库](https://github.com/ripienaar/free-for-dev)为准。 ｜ [English](README.en.md)
>
> 跟随上游持续更新；上游新增条目在翻译前暂以英文显示。配套站点：<https://shenlq1017.github.io/free-for-dev/>

# free-for.dev

如今，为开发者和开源作者提供免费套餐的服务越来越多，但要把它们全部找出来、以便做出明智的选择，是一件很花时间的事。

这是一份提供开发者免费套餐的软件（SaaS、PaaS、IaaS 等）及其他服务的清单。

本清单的收录范围限定为基础设施开发者（系统管理员、DevOps 工程师等）可能用得上的东西。我们欣赏所有免费服务，但最好还是保持主题聚焦。有时界限并不清晰，因此这里带有一定的主观取舍；如果上游没有接受某项贡献，请不要介意。

这份清单由 1600 多人通过 Pull Request、评审、建议和劳动共同完成。你也可以向上游提交 [Pull Request](https://github.com/ripienaar/free-for-dev) 来添加新服务，或移除那些政策已变更或已停止的服务。

[![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单只收录「即服务」类产品，不收录可自托管的软件。入选的服务必须提供免费套餐，而不仅仅是免费试用；如果免费时长有时间限制，则至少为一年。上游还会从安全角度审视免费套餐：支持 SSO 没问题，但如果某项服务把 TLS（HTTPS）限制在付费档，将不会被收录。

# 目录

  * [主流云厂商（Major Cloud Providers）](#主流云厂商major-cloud-providers)
  * [云管理解决方案（Cloud management solutions）](#云管理解决方案cloud-management-solutions)
  * [源代码仓库（Source Code Repos）](#源代码仓库source-code-repos)
  * [API、数据与机器学习（APIs, Data, and ML）](#api数据与机器学习apis-data-and-ml)
  * [制品仓库（Artifact Repos）](#制品仓库artifact-repos)
  * [团队协作工具（Tools for Teams and Collaboration）](#团队协作工具tools-for-teams-and-collaboration)
  * [内容管理系统（CMS）](#内容管理系统cms)
  * [代码生成（Code Generation）](#代码生成code-generation)
  * [代码质量（Code Quality）](#代码质量code-quality)
  * [代码搜索与浏览（Code Search and Browsing）](#代码搜索与浏览code-search-and-browsing)
  * [持续集成与持续部署（CI and CD）](#持续集成与持续部署ci-and-cd)
  * [测试（Testing）](#测试testing)
  * [安全与 PKI（Security and PKI）](#安全与-pkisecurity-and-pki)
  * [认证、授权与用户管理（Authentication, Authorization, and User Management）](#认证授权与用户管理authentication-authorization-and-user-management)
  * [移动应用分发与反馈（Mobile App Distribution and Feedback）](#移动应用分发与反馈mobile-app-distribution-and-feedback)
  * [管理系统（Management System）](#管理系统management-system)
  * [消息与流处理（Messaging and Streaming）](#消息与流处理messaging-and-streaming)
  * [日志管理（Log Management）](#日志管理log-management)
  * [翻译管理（Translation Management）](#翻译管理translation-management)
  * [监控（Monitoring）](#监控monitoring)
  * [崩溃与异常处理（Crash and Exception Handling）](#崩溃与异常处理crash-and-exception-handling)
  * [搜索（Search）](#搜索search)
  * [教育与职业发展（Education and Career Development）](#教育与职业发展education-and-career-development)
  * [邮件服务（Email）](#邮件服务email)
  * [功能开关管理平台（Feature Toggles Management Platforms）](#功能开关管理平台feature-toggles-management-platforms)
  * [字体（Font）](#字体font)
  * [表单（Forms）](#表单forms)
  * [生成式 AI（Generative AI）](#生成式-aigenerative-ai)
  * [CDN 与安全防护（CDN and Protection）](#cdn-与安全防护cdn-and-protection)
  * [平台即服务（PaaS）](#平台即服务paas)
  * [后端即服务（BaaS）](#后端即服务baas)
  * [低代码平台（Low-code Platform）](#低代码平台low-code-platform)
  * [网站托管（Web Hosting）](#网站托管web-hosting)
  * [域名解析（DNS）](#域名解析dns)
  * [域名（Domain）](#域名domain)
  * [基础设施即服务（IaaS）](#基础设施即服务iaas)
  * [托管数据服务（Managed Data Services）](#托管数据服务managed-data-services)
  * [隧道、WebRTC、WebSocket 服务器及其他路由（Tunneling, WebRTC, Web Socket Servers and Other Routers）](#隧道webrtcwebsocket-服务器及其他路由tunneling-webrtc-web-socket-servers-and-other-routers)
  * [问题追踪与项目管理（Issue Tracking and Project Management）](#问题追踪与项目管理issue-tracking-and-project-management)
  * [存储与媒体处理（Storage and Media Processing）](#存储与媒体处理storage-and-media-processing)
  * [设计与 UI（Design and UI）](#设计与-uidesign-and-ui)
  * [地图数据可视化（Data Visualization on Maps）](#地图数据可视化data-visualization-on-maps)
  * [软件包构建系统（Package Build System）](#软件包构建系统package-build-system)
  * [IDE 与代码编辑（IDE and Code Editing）](#ide-与代码编辑ide-and-code-editing)
  * [分析、事件与统计（Analytics, Events and Statistics）](#分析事件与统计analytics-events-and-statistics)
  * [访客会话录制（Visitor Session Recording）](#访客会话录制visitor-session-recording)
  * [国际手机号验证 API 与 SDK（International Mobile Number Verification API and SDK）](#国际手机号验证-api-与-sdkinternational-mobile-number-verification-api-and-sdk)
  * [支付与账单集成（Payment and Billing Integration）](#支付与账单集成payment-and-billing-integration)
  * [Docker 相关（Docker Related）](#docker-相关docker-related)
  * [开发者博客平台（Dev Blogging Sites）](#开发者博客平台dev-blogging-sites)
  * [评论平台（Commenting Platforms）](#评论平台commenting-platforms)
  * [截图 API（Screenshot APIs）](#截图-apiscreenshot-apis)
  * [Flutter 相关及无 Mac 构建 iOS 应用（Flutter Related and Building IOS Apps without Mac）](#flutter-相关及无-mac-构建-ios-应用flutter-related-and-building-ios-apps-without-mac)
  * [隐私管理（Privacy Management）](#隐私管理privacy-management)
  * [其他杂项（Miscellaneous）](#其他杂项miscellaneous)
  * [远程桌面工具（Remote Desktop Tools）](#远程桌面工具remote-desktop-tools)
  * [其他免费资源（Other Free Resources）](#其他免费资源other-free-resources)

## 主流云厂商（Major Cloud Providers）

  * [Google Cloud Platform](https://cloud.google.com)
    * App Engine - 每天 28 个前端实例小时、9 个后端实例小时
    * Cloud Firestore - 1GB 存储，每天 50,000 次读取、20,000 次写入、20,000 次删除
    * Compute Engine - 1 个非抢占式 e2-micro、30GB HDD、5GB 快照存储（仅限特定区域），每月 1 GB 从北美发往所有区域目的地（不包括中国和澳大利亚）的网络出站流量
    * Cloud Storage - 5GB、1GB 网络出站流量
    * Cloud Shell - 基于 Web 的 Linux shell/主 IDE，配备 5GB 持久存储。每周限制 60 小时
    * Cloud Pub/Sub - 每月 10GB 消息
    * Cloud Functions - 每月 200 万次调用（包括后台调用和 HTTP 调用）
    * Cloud Run - 每月 200 万次请求、360,000 GB-seconds 内存、180,000 vCPU-seconds 计算时间、每月 1 GB 从北美出站的网络流量
    * Google Kubernetes Engine - 一个区域级集群免收集群管理费。每个用户节点按 Compute Engine 标准定价收费
    * BigQuery - 每月 1 TB 查询量、每月 10 GB 存储
    * Cloud Build - 每天 120 构建分钟
    * [Google Colab](https://colab.research.google.com/) - 免费的 Jupyter Notebooks 开发环境。
    * [Kaggle](https://www.kaggle.com/) - Jupyter Notebooks 计算环境，配备 4 个 CPU 核心和 30 GB RAM，无任何每周使用限制。通过手机号验证后，可免费添加 1 块 Nvidia Tesla P100 GPU 或 2 块 Nvidia Tesla T4 GPU，使用上限为每周 30 GPU 小时。通过身份验证后，可免费使用 1 个配备 96 个 CPU 核心和 330 GB RAM 的 TPU v3-8，使用上限为每周 20 小时。更多详情请查看[技术规格](https://www.kaggle.com/docs/notebooks#technical-specifications)。
    * [ChromeRemoteDesktop](https://remotedesktop.google.com/) - 免费的远程桌面应用，设备数量几乎没有限制；由 Google 所有，因此需要 Google 账号。
    * [Google AI Studio](https://aistudio.google.com/) - 免费使用 Gemini 3.5 Flash、Gemini 3 Flash 和 Gemma 4 模型。Flash 的免费套餐提供每分钟 5 次请求、每天 20 次请求以及每分钟 250k 输入 token。而 Gemma 4 的免费套餐提供每分钟 30 次请求、每天 14.4k 次请求，但每分钟（仅）16k 输入 token。
    * 完整详细列表 - https://cloud.google.com/free

  * [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月 1TB 出站流量、1000 万次 HTTP 请求以及每月 200 万次 Function 调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10 个自定义指标和告警、100 万次 API 请求、5GB 日志数据摄取和 5GB 日志数据归档
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月 100 分钟构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5 个活跃用户、每个账户 5k 个仓库、每月 50GB 存储和每月 10K 次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月 1 条活跃流水线
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL 数据库
    * [Lambda](https://aws.amazon.com/lambda/) - 每月 100 万次请求
    * [SNS](https://aws.amazon.com/sns/) - 每月 100 万次发布
    * [SES](https://aws.amazon.com/ses/) - 每月 3.000 条消息（6 个月）
    * [SQS](https://aws.amazon.com/sqs/) - 100 万次消息队列请求
    * 完整详细列表 - https://aws.amazon.com/free/

  * [Microsoft Azure](https://azure.microsoft.com)
    * [App Service](https://azure.microsoft.com/services/app-service/) - 10 个 Web、移动或 API 应用（每天 60 CPU 分钟）
    * [Functions](https://azure.microsoft.com/services/functions/) - 每月 100 万次请求
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速、轻松、精简地搭建开发-测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000 个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 每月 50,000 个已存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5 个活跃用户，无限量私有 Git 仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) - 10 个免费并行作业，面向开源项目在 Linux、macOS 和 Windows 上提供无限分钟数
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天 8,000 条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 750 小时、15GB 数据处理和 5 条规则（12 个月）
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100 万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB 出站流量（12 个月）
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB 存储和 1000 RUs 的预置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) - 构建、部署和托管静态应用与无服务器函数，附带免费 SSL、身份验证/授权以及自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 100GB LRS 事务（Azure Files）、5GB Blob 存储、10GB LRS 归档存储、2x64GB SSD（12 个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、人脸检测、机器人等），免费套餐包含有限的事务次数
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于 AI 的搜索与索引服务，可免费处理 10,000 个文档
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管 Kubernetes 服务，免费集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月 100K 次操作
    * [Service Bus](https://azure.microsoft.com/products/service-bus/) - 750 小时和 1300 万次操作的标准层基础单元（12 个月）
    * 完整详细列表 - https://azure.microsoft.com/free/

  * [Oracle Cloud](https://www.oracle.com/cloud/)
    * Compute
       - 2 台基于 AMD 的 Compute VM，每台配备 1/8 OCPU 和 1 GB 内存
       - 2 个基于 Arm 的 Ampere A1 核心和 12 GB 内存，可作为 1 台 VM 使用，或最多拆分为 2 台 VM
       - 实例在被[视为空闲](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)时将被回收
    * Block Volume - 2 个卷，共 200 GB（供计算使用）
    * Object Storage - 10 GB
    * Load balancer - 1 个实例，10 Mbps
    * Databases - 2 个数据库，每个 20 GB
    * Monitoring - 5 亿个摄取数据点、10 亿个检索数据点
    * Bandwidth - 每月 10 TB 出站流量，基于 x64 的 VM 限速 50 Mbps，基于 ARM 的 VM 为 500 Mbps × 核心数
    * Public IP - VM 的 2 个 IPv4，负载均衡器的 1 个 IPv4
    * Notifications - 每月 100 万个投递选项、每月发送 1000 封电子邮件
    * 完整详细列表 - https://www.oracle.com/cloud/free/

  * [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant database - 1 GB 数据存储
    * Db2 database - 100MB 数据存储
    * API Connect - 每月 50,000 次 API 调用
    * Availability Monitoring - 每月 300 万个数据点
    * Log Analysis - 每天 500MB 日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/)
    * [Application Services](https://www.cloudflare.com/plans/) - 为无限数量的域名提供免费 DNS、DDoS 防护、CDN 以及免费 SSL、防火墙规则和页面规则、WAF、机器人缓解、免费无限制速率限制（每个域名 1 条规则）、分析和电子邮件转发
    * [Zero Trust & SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多 50 个用户、24 小时活动日志记录、三个网络位置
    * [Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/) -  你可以通过隧道将本地运行的 HTTP 端口暴露到 trycloudflare.com 上的随机子域名，使用 [Quick Tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/) 即可，无需账号。更多功能（TCP 隧道、负载均衡、VPN）请见 [Zero Trust](https://www.cloudflare.com/products/zero-trust/) 免费计划。
    * [Workers](https://developers.cloudflare.com/workers/) - 在 Cloudflare 全球网络上免费部署无服务器代码——每天 100k 次请求。
    * [Workers KV](https://developers.cloudflare.com/kv) - 每天 100k 次读取请求、1000 次写入请求、1000 次删除请求、1000 次列出请求、1 GB 存储数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月 10 GB、每月 100 万次 A 类操作、每月 1000 万次 B 类操作
    * [D1](https://developers.cloudflare.com/d1/) - 每天读取 500 万行、每天写入 100k 行、1 GB 存储
    * [Pages](https://developers.cloudflare.com/pages/) - 在 Cloudflare 快速、安全的全球网络上开发和部署你的 Web 应用。每月 500 次构建、100 个自定义域名、集成 SSL、无限可访问席位、无限预览部署，并通过 Cloudflare Workers 集成获得全栈能力。
    * [Queues](https://developers.cloudflare.com/queues/) - 每月 100 万次操作
    * [TURN](https://developers.cloudflare.com/calls/turn/) - 每月 1TB 免费（出站）流量。

  * [Zoho](https://www.zoho.com) - 最初是一家电子邮件服务商，现在提供一整套服务，其中部分提供免费计划。提供免费计划的服务列表：
    * [Catalyst by Zoho](https://catalyst.zoho.com) -  提供慷慨[免费套餐](https://catalyst.zoho.com/free-tier.html)的 PaaS/全栈云平台
    * [Zoho Apptics](https://www.zoho.com/apptics/) - 统一且可落地的产品分析，用于监控性能、分析用户行为并收集移动、Web 和桌面应用的反馈，提供慷慨的永久免费计划。
    * [Email](https://zoho.com/mail) 5 个用户免费。每用户 5GB，附件限制 25 MB，一个域名。
    * [Zoho Assist](https://www.zoho.com/assist) - Zoho Assist 的永久免费计划包含 1 个并发远程支持许可，以及对 5 个无人值守计算机许可的无限期访问，可供专业和个人使用。
    * [Sprints](https://zoho.com/sprints) 5 个用户免费，5 个项目和 500MB 存储。
    * [Docs](https://zoho.com/docs) - 5 个用户免费，上传限制 1 GB、存储 5GB。Zoho Office Suite（Writer、Sheets 和 Show）随附提供。
    * [Projects](https://zoho.com/projects) - 3 个用户免费、2 个项目和 10 MB 附件限制。同一计划也适用于 [Bugtracker](https://zoho.com/bugtracker)。
    * [Connect](https://zoho.com/connect) - 团队协作，25 个用户免费，包含三个群组、三个自定义应用、3 个看板、3 个手册和 10 个集成，以及频道、活动和论坛。
    * [Meeting](https://zoho.com/meeting) - 最多 3 名会议参与者和 10 名网络研讨会参会者的会议。
    * [Vault](https://zoho.com/vault) - 个人可使用的密码管理。
    * [Showtime](https://zoho.com/showtime) - 又一款会议软件，用于最多 5 名参会者的远程培训课程。
    * [Notebook](https://zoho.com/notebook) - Evernote 的免费替代品。
    * [Wiki](https://zoho.com/wiki) - 三个用户免费，50 MB 存储、无限页面、zip 备份、RSS 和 Atom 订阅源、访问控制和可自定义 CSS。
    * [Subscriptions](https://zoho.com/subscriptions) - 周期性账单管理，20 个客户/订阅和 1 个用户免费，所有支付托管均由 Zoho 完成。会保存最近 40 个订阅指标
    * [Checkout](https://zoho.com/checkout) - 产品账单管理，提供 3 个页面和最多 50 笔支付。
    * [Desk](https://zoho.com/desk) - 客户支持管理，含三名客服、私有知识库和电子邮件工单。与 [Assist](https://zoho.com/assist) 集成，支持 1 名远程技术人员和 5 台无人值守计算机。
    * [Cliq](https://zoho.com/cliq) - 团队聊天软件，100 GB 存储、用户数不限、每个频道 100 个用户及 SSO。
    * [Campaigns](https://zoho.com/campaigns) - 电子邮件营销
    * [Forms](https://zoho.com/forms) - 表单创建工具
    * [Sign](https://zoho.com/sign) - 无纸化签名
    * [Surveys](https://zoho.com/surveys) - 在线调查
     * [Bookings](https://zoho.com/bookings) - 预约安排

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案（Cloud management solutions）

  * [Brainboard](https://www.brainboard.co) - 端到端可视化构建和管理云基础设施的协作解决方案。
  * [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一台部署服务器、一个静态站点），Cloud 66 为你提供在任意云上构建、部署和扩展应用所需的一切，而无需烦恼“服务器那些事”。
  * [Cloud Cost Analyzer](https://cca.dragonfractal.com/) - 通过 92 项自动化检查扫描 AWS 和 Azure 的成本浪费，包括空闲 NAT 网关、gp2 卷和超配实例。在只读、开发者优先的 CLI 中获取节省估算。免费套餐支持在一个 AWS 账户中每次扫描最多 5,000 个资源。付费层级增加资源 ID 和精确的修复步骤。
  * [deployment.io](https://deployment.io) - Deployment.io 帮助开发者在 AWS 上自动化部署。在我们的免费套餐中，开发者（单用户）可以部署无限数量的静态站点、Web 服务和环境。我们每月免费提供 10 次任务执行，免费套餐包含预览和自动部署。
  * [Parsivex](https://www.parsivex.com) - Parsivex 扫描你的 AWS 账户，查找空闲 EC2、未挂载的 EBS、过大的 RDS、过期快照、NAT 网关过度使用等。免费套餐每月为一个 AWS 账户扫描一次，并返回每月浪费总额及分类明细。付费计划可查看逐项调查结果和定时重新扫描。
  * [Pulumi](https://www.pulumi.com/) - 现代的基础设施即代码平台，允许你使用熟悉的编程语言和工具来构建、部署和管理云基础设施。
  * [scalr.com](https://scalr.com/) - Scalr 是一款 Terraform 自动化与协作（TACO）产品，用于在 Terraform 管理的基础设施和配置上更好地协作与自动化。完整支持 Terraform CLI、集成 OPA，并采用分层配置模型。无 SSO 附加费。包含所有功能。每月最多可免费使用 50 次运行。

**[⬆️ 返回顶部](#目录)**

## 源代码仓库（Source Code Repos）

  * [Bitbucket](https://bitbucket.org/) - 最多 5 个用户可使用无限量公开和私有 Git 仓库，并提供用于 CI/CD 的 Pipelines
  * [Codeberg](https://codeberg.org/) - 为免费和开源项目提供无限量公开和私有 Git 仓库（协作者数量不限）。由 [Forgejo](https://forgejo.org/) 驱动。通过 [Codeberg Pages](https://codeberg.page/) 提供静态网站托管。通过 [Codeberg's CI](https://docs.codeberg.org/ci/) 提供 CI/CD 托管。通过 [Codeberg Translate](https://translate.codeberg.org/) 提供翻译托管。还包括软件包和容器托管、项目管理和问题追踪
  * [framagit.org](https://framagit.org/) - Framagit 是 Framasoft 基于 Gitlab 软件搭建的软件锻造平台，包含 CI、静态页面、项目页面和问题追踪。
  * [GitGud](https://gitgud.io) - 无限量私有和公开仓库。永久免费。由 GitLab 和 Sapphire 驱动。包含 CI/CD、静态托管、容器注册表、项目管理和问题追踪。
  * [GitHub](https://github.com/) - 无限量公开仓库和无限量私有仓库（协作者数量不限）。包含 CI/CD、开发环境、静态托管、软件包和容器托管、项目管理以及 AI Copilot
  * [gitlab.com](https://about.gitlab.com/) - 无限量公开和私有 Git 仓库，最多 5 名协作者。包含 CI/CD、静态托管、容器注册表、项目管理和问题追踪
  * [heptapod.net](https://foss.heptapod.net/) - Heptapod 是 GitLab Community Edition 的友好分支，提供对 Mercurial 的支持
  * [pijul.com](https://pijul.com/) - 无限量免费且开源的分布式版本控制系统。其独特特性基于可靠的补丁理论，易于学习、使用和分发。解决了 git/hg/svn/darcs 的诸多问题。
  * [projectlocker.com](https://projectlocker.com) - 一个免费的私有项目（Git 和 Subversion），50 MB 空间
  * [RocketGit](https://rocketgit.com) - 基于 Git 的仓库托管。无限量公开和私有仓库。
  * [savannah.gnu.org](https://savannah.gnu.org/) - 作为自由软件项目（GNU 项目）的协作式软件开发管理系统
  * [savannah.nongnu.org](https://savannah.nongnu.org/) - 作为自由软件项目（非 GNU 项目）的协作式软件开发管理系统

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习（APIs, Data, and ML）

  * [Abstract API](https://www.abstractapi.com) - 适用于多种用例的 API 套件，包括 IP 地理位置、电话号码验证或电子邮件验证。
  * [AlphaAI](https://alphai.io/developers) - 财经新闻 API 和 MCP 服务器。每篇文章都带有按股票代码的影响分析、分类和 1-10 的相关性评分，SEC Form 4 内幕交易申报会被转化为评分事件。免费套餐在 REST 和 MCP 上均包含每分钟 20 次请求和每天 100 次请求，无需银行卡。
  * [AnyHook](https://anyhook.net) - 入站 webhook 中继：将 Stripe、GitHub 或 LINE 机器人的 webhook 指向它，它会在将每个事件投递给你的处理程序之前存储事件，当你的端点宕机时自动重试，并保留可供回放的日志。无需账号即可通过 API 创建端点。免费计划包含每月 3,000 个事件、1 个应用、3 次重试和 3 天保留期，无需信用卡。
  * [Apify](https://www.apify.com/) - 网页抓取和自动化平台，可为任意网站创建 API 并提取数据。提供现成的抓取器、集成代理和定制解决方案。免费计划每月包含 5 美元平台额度。
  * [APITemplate.io](https://apitemplate.io) - 通过简单的 API 或 Zapier、Airtable 等自动化工具自动生成图片和 PDF 文档。无需 CSS/HTML。免费计划提供每月 50 张图片和三个模板。
  * [APIVerve](https://apiverve.com) - 即时免费访问 120 多个 API，构建时注重质量、一致性和可靠性。免费计划每月最多包含 50 个 API Token。（可能已下线，2025-06-25）
  * [Arize AI](https://arize.com/) - 用于模型监控以及数据质量、性能漂移等问题根因分析的机器学习可观测性平台。最多两个模型免费。
  * [Beeceptor](https://beeceptor.com) - 用于模拟和调试多协议 API（REST、SOAP、gRPC 和 GraphQL）的无代码云平台，提供基于规则逻辑的即时服务器、CRUD 和有状态模拟、代理以及 CORS 管理，以加快集成和测试。免费计划包含每天 50 次请求，并提供一个公共仪表板/端点，任何拥有该仪表板 URL 的人都可以查看提交的请求和响应。
  * [BigDataCloud](https://www.bigdatacloud.com/) - 为现代 Web 提供快速、准确且免费（无限制或每月最多 10K-50K 次）的 API，包括 IP 地理位置、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
  * [Brave Search API](https://brave.com/search/api/) - 独立的网页、新闻、图片、视频搜索和 AI/LLM 上下文 API，适用于 RAG 流水线和 AI 智能体。免费套餐包含每月 5 美元额度（验证需要信用卡）。
  * [Browse AI](https://www.browse.ai) - 在 Web 上提取和监控数据。每月免费 1k 额度，相当于 1k 并发请求。
  * [Calendarific](https://calendarific.com) - 覆盖 200 多个国家的企业级公共假日 API 服务。免费计划包含每月 500 次调用。
  * [Canopy](https://www.canopyapi.co/) - 提供 Amazon.com 产品、搜索和分类数据的 GraphQL API。免费计划包含每月 100 次调用。
  * [CarAPI.dev](https://carapi.dev) - 全面的汽车数据 API，提供 VIN 解码、被盗车辆检查、车辆估值、检测数据等。免费套餐在所有 9 个端点上每月包含 100 次请求。
  * [CatchDoms](https://catchdoms.com) - 聚合来自 16 个市场的过期和即将删除域名列表，附带 SEO 丰富信息（反向链接、Trust Flow、Wayback 历史）和质量评分。免费计划：10 个解锁列表、5 个收藏、3 个已保存搜索。注册可获得 7 天 Pro 试用，包含完整 REST API 和 MCP 服务器访问权限。
  * [Cloudmersive](https://cloudmersive.com/) - 实用工具 API 平台，可完全访问丰富的 API 库，包括文档转换、病毒扫描等，每月 600 次调用，仅限北美 AZ，最大文件大小 2.5MB。
  * [CometML](https://www.comet.com/site/) - 用于实验追踪、模型生产管理、模型注册表和完整数据血缘的 MLOps 平台，覆盖从训练到生产的整个工作流。个人和学术用途免费。
  * [Commerce Layer](https://commercelayer.io) - 可组合商务 API，可从任意前端创建、下单和管理订单。开发者计划允许每月免费 100 个订单和最多 1,000 个 SKU。
  * [Composio](https://composio.dev/) - 面向 AI 智能体和 LLM 的集成平台。跨智能体互联网集成 200 多个工具。
  * [Conversion Tools](https://conversiontools.io/) - 面向文档、图片、视频、音频和电子书的在线文件转换器。提供 REST API。提供 Node.js、PHP、Python 库。支持最大 50 GB 的文件（付费计划）。免费套餐受文件大小（20MB）和转换次数（每天 30 次、每月 300 次）限制。
  * [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 提供广泛信息的 API 和微服务，包括国家、地区、省份、城市、邮政编码等。免费套餐包含每天最多 100 次请求。
  * [Coupler](https://www.coupler.io/) - 在应用之间同步数据的数据集成工具。可创建实时仪表板和报告、转换和操作数值，并收集和备份洞察。免费计划仅限一个用户、一个数据连接、一个数据源和一个数据目的地。还需要手动刷新数据。
  * [CraftMyPDF](https://craftmypdf.com) - 使用带拖放编辑器的可复用模板和简单 API 自动生成 PDF 文档。免费计划提供每月 100 个 PDF 和三个模板。
  * [Cube](https://cube.dev/) - Cube 帮助数据工程师和应用开发者访问现代数据存储中的数据，将其组织为一致的定义，并交付给每个应用。使用 Cube 最快的方式是 Cube Cloud，其免费套餐限制为每天 1,000 次查询。
  * [CurlHub](https://curlhub.io) - 用于检查和调试 API 调用的代理服务。免费计划包含每月 10,000 次请求。
  * [CurrencyScoop](https://currencyscoop.com) - 面向金融科技应用的实时货币数据 API。免费计划包含每月 5,000 次调用。
  * [CustomJS](https://www.customjs.io) - 提供 HTML 转 PDF、PDF 转 PNG/文本以及 PDF 合并/提取 API。免费套餐每月 600 次调用。
  * [Data Fetcher](https://datafetcher.com) - 无需代码即可将 Airtable 连接到任意应用或 API。类似 Postman 的界面，用于在 Airtable 中运行 API 请求。预建了与数十种应用的集成。免费计划包含每月 100 次运行。
  * [Dataimporter.io](https://www.dataimporter.io) - 用于连接、清洗数据并将其导入 Salesforce 的工具。免费计划包含每月最多 20,000 条记录。
  * [Datalore](https://datalore.jetbrains.com) - Jetbrains 出品的 Python notebook。包含 10 GB 存储和每月 120 小时运行时。
  * [DB Designer](https://www.dbdesigner.net/) - 基于云的数据库模式设计和建模工具，免费入门计划包含 2 个数据库模型，每个模型十张表。
  * [DB-IP](https://db-ip.com/api/free) - 免费 IP 地理位置 API，每个 IP 每天 1k 次请求。采用 CC-BY 4.0 许可证的 lite 数据库同样免费。
  * [DeepAR](https://developer.deepar.ai) - 通过一个 SDK 为任意平台提供增强现实人脸滤镜。免费计划提供最多 10 个月活跃用户（MAU），最多追踪 4 张脸
  * [Deepnote](https://deepnote.com) - 一款新型数据科学 notebook。兼容 Jupyter，支持实时协作和在云端运行。免费套餐包含无限量个人项目、无限量配备 5GB RAM 和 2vCPU 的基础机器，以及最多 3 名编辑者的团队。
  * [Compare JSON](https://comparejson.com) - 用于比较两个 JSON 数据结构之间差异的在线工具，帮助你快速定位 JSON 数据中的差异。
  * [Disease.sh](https://disease.sh/) - 免费 API，为构建 Covid-19 相关的实用应用提供准确数据。
  * [Doczilla](https://www.doczilla.app/) - SaaS API，支持直接从 HTML/CSS/JS 代码生成截图或 PDF。免费计划允许每月 250 个文档。
  * [Doppio](https://doppio.sh/) - 托管 API，使用顶级渲染技术生成并私密存储 PDF 和截图。免费计划允许每月 400 个 PDF 和截图。
  * [DocPenny](https://docpenny.com) - 基于模板、webhook 投递和积分定价的 HTML 转 PDF 文档生成。免费计划每月 50 个积分，无需信用卡。
  * [Doqlo](https://doqlo.com/) - 通过 Web 应用或公共 API 从 CSV 批量填充和邮件合并 PDF 表单。免费计划包含每月 100 个输出 PDF。
  * [DynamicDocs](https://advicement.io) - 通过基于 LaTeX 模板的 JSON 转 PDF API 生成 PDF 文档。免费计划允许每月 50 次 API 调用并可访问模板库。
  * [Earnings Feed](https://earningsfeed.com/api) - 实时 SEC 文件、内幕交易和机构持仓 API。免费套餐包含每分钟 15 次请求。
  * [Export SDK](https://exportsdk.com) - PDF 生成器 API，带拖放模板编辑器，提供 SDK 和无代码集成。免费计划有每月 250 页、用户数不限和三个模板。
  * [Financial Data](https://financialdata.net/) - 股票市场和金融数据 API。免费计划允许每天 300 次请求。
  * [finlight](https://finlight.me) - 实时财经新闻 API，带实体解析（股票代码、ISIN）和情感标签，可通过 REST、WebSocket、webhook 和 MCP 服务器使用。免费套餐：REST 和 MCP 均为每月 5,000 次请求、文章延迟 12 小时，无需银行卡。
  * [Firecrawl](https://www.firecrawl.dev/) - 抓取网站并将其转换为干净的、可供 LLM 使用的 markdown 或结构化数据的 API，可处理 JavaScript 渲染、代理和速率限制。免费计划包含每月 1,000 个额度，无需信用卡。
  * [FraudLabs Pro](https://www.fraudlabspro.com) - 筛查订单交易中的信用卡支付欺诈。此 REST API 将根据订单的输入参数检测所有可能的欺诈特征。免费 Micro 计划每月 500 笔交易。
  * [FreeIPAPI](https://freeipapi.com) - 免费、快速、可靠的 IP 地理位置 API，面向商业和非商业用户，以 JSON 提供
  * [Geolocated.io](https://geolocated.io) - 部署多洲服务器的 IP 地理位置 API，免费计划提供每天 2,000 次请求。
  * [Hex](https://hex.tech/) - 面向 notebook、数据应用和知识库的协作数据平台。免费社区层级最多五个项目。
  * [Hook0](https://www.hook0.com/) - Hook0 是一款开源的 Webhook 即服务（WaaS），让在线产品能够轻松提供 webhook。每天可免费派发最多 100 个事件，并保留七天历史记录。
  * [Hoppscotch](https://hoppscotch.io) - 免费、快速且美观的 API 请求构建器。
  * [HS Ping](https://hsping.com) - 多国 HS（协调制度）和 HTS（协调关税制度）代码查询 API，免费计划提供每天 100 次查询。
  * [huggingface.co](https://huggingface.co) - 为 Pytorch、TensorFlow 和 JAX 构建、训练和部署 NLP 模型。每月最多免费 30k 输入字符。
  * [Insomnia](https://insomnia.rest) - 开源 API 客户端，用于设计和测试 API，支持 REST 和 GraphQL
  * [Inngest](https://www.inngest.com) - 面向 TypeScript、Python 和 Go 的持久执行和事件驱动工作流。Hobby 计划免费，每月 50k 次执行、5 个并发步骤、摄取 500k 个事件，无需信用卡。
  * [Invantive Cloud](https://cloud.invantive.com/) - 使用 Invantive SQL 或 OData4（通常为 Power BI 或 Power Query）访问 70 多个（云）平台，如 Exact Online、Twinfield、ActiveCampaign 或 Visma。包含数据复制和交换。面向开发者和实施顾问的免费计划。特定平台可免费使用，但数据量有限制。
  * [IP Geolocation API by ipwho.org](https://ipwho.org/) - 每天 2,000 次免费请求。快速、企业级 API，非企业级价格。受到开发者、企业、政府和教育客户信赖。服务器位于 12 个以上区域。
  * [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) - 来自 Abstract 的 IP 地理位置 API - 允许 1,000 次免费请求。
  * [IP Geolocation](https://ipgeolocation.io/) - IP 地理位置 API - 面向开发者的永久免费计划，限制为每天 1,000 次请求。
  * [ip-api](https://ip-api.com) - IP 地理位置 API，非商业用途免费，无需 API 密钥，免费计划限制同一 IP 地址每分钟 45 次请求。
  * [IP.City](https://ip.city) - 每天 100 次免费 IP 地理位置请求
  * [IP2Location.io](https://www.ip2location.io/) - 免费增值、快速且可靠的 IP 地理位置 API。获取城市、坐标、ISP、ASN、AS 数据等。免费计划包含每月 50k 额度。IP2Location.io 还提供每月 500 次免费 WHOIS 和托管域名查询。查看域名注册详情并查找托管在特定 IP 上的域名。升级到付费计划可获得更多功能。
  * [Proxmint GeoIP](https://proxmint.com/tools/ip-lookup) — 免费的 IP → 国家/城市/ASN JSON API，无需密钥，CORS 开放。基于 MaxMind GeoLite2。
  * [ip2geo.dev](https://ip2geo.dev) - IP 地理位置 API，将 IP 地址转换为位置数据，包括城市、国家、时区、ASN 和货币。免费计划包含每月 1,000 次请求。
  * [ipaddress.sh](https://ipaddress.sh) - 以不同[格式](https://about.ipaddress.sh/)获取公共 IP 地址的简单服务。
  * [ipapi.is](https://ipapi.is/) - 由开发者为开发者打造的可靠 IP 地址 API，具备业界最佳的托管检测能力。免费计划提供 1000 次查询，无需注册。
  * [ipapi](https://ipapi.co/) - Kloudend, Inc 出品的 IP 地址定位 API - 构建在 AWS 上的可靠地理位置 API，受到财富 500 强信赖。免费套餐提供每月 30k 次查询（每天 1k），无需注册。
  * [ipbase.com](https://ipbase.com) - IP 地理位置 API - 涵盖每月 150 次请求的永久免费计划。
  * [IPinfo](https://ipinfo.io/) - 快速、准确且免费（每月最多 50k 次）的 IP 地址数据 API。提供包含地理位置、公司、运营商、IP 范围、域名、滥用联系人等详细信息的 API。所有付费 API 均可免费试用。
  * [IPLocate](https://www.iplocate.io) - IP 地理位置 API，每天最多 1,000 次请求免费。包括代理/VPN/托管检测、ASN 数据、IP 对应公司等。IPLocate 还提供可免费下载的 IP 对应国家和 IP 对应 ASN 数据库，格式为 CSV 或兼容 GeoIP 的 MMDB。
  * [IPTrace](https://iptrace.io) - 极其简单的 API，为你的业务提供可靠且实用的 IP 地理位置数据，每月 50,000 次免费查询。
  * [JSON IP](https://getjsonip.com) - 返回请求来源客户端的公共 IP 地址。免费套餐无需注册。借助 CORS，可以直接在浏览器中使用客户端 JS 请求数据。适用于监控客户端和服务器 IP 变化的服务。请求次数不限。
  * [JSON to Table](https://jsontotable.org) - 将 JSON 转换为交互式表格，便于在线快速查看、编辑和分享。
  * [JSON2Video](https://json2video.com) - 视频编辑 API，以编程方式或无代码方式自动化视频营销和社交媒体视频制作。
  * [JSONing](https://jsoning.com/api/) - 从 JSON 对象创建模拟 REST API，并可自定义 HTTP 状态码、标头和响应体。
  * [Labelixa](https://labelixa.com) - Zebra ZPL 标签渲染和验证 API 及浏览器查看器。免费套餐包含匿名渲染额度和无水印条形码生成，无需银行卡。
  * [LayerCall](https://www.layercall.com) - 一次调用即可完成 IP、电子邮件、电话、域名或设备的欺诈和信任评分，并为 AI 智能体提供授权和 Web Bot Auth 验证。每月免费 1,000 次查询，无需银行卡。
  * [LoginLlama](https://loginllama.app) - 登录安全 API，用于检测欺诈性和可疑登录并通知你的客户。每月 1,000 次登录免费。
  * [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等的实时和历史金融数据。永久免费 API 层级允许每天免费 100 次 API 请求。
  * [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观测你的 AI 智能体。Maxim 是端到端评估和可观测性平台，帮助团队可靠地发布 AI 智能体，速度提升 5 倍以上。独立开发者和小团队（3 个席位）永久免费。
  * [microlink.io](https://microlink.io/) - 它将任意网站转化为元标签标准化、精美链接预览、抓取能力或截图即服务等数据。每天 50 次请求，天天免费。
  * [Mintlify](https://mintlify.com) - API 文档的现代标准。美观且易于维护的 UI 组件、应用内搜索和交互式演练场。1 名编辑者免费。
  * [MockAPI](https://www.mockapi.io/) - MockAPI 是一个简单工具，可让你快速模拟 API、生成自定义数据并通过 RESTful 界面执行操作。MockAPI 旨在作为原型制作/测试/学习工具。免费提供 1 个项目、每个项目 2 个资源。
  * [Mockerito](https://mockerito.com/) - 免费的模拟 REST API 服务，跨 9 个领域（电子商务、金融、医疗保健、教育、招聘、社交媒体、股票市场、天气和航空）提供逼真数据。无需强制注册、无需 API 密钥、请求次数不限。非常适合前端原型制作、API 测试以及学习和教授 Web 开发。
  * [Mockfly](https://www.mockfly.dev/) - Mockfly 是用于 API 模拟和功能标志管理的可靠开发工具。通过直观界面快速生成和控制模拟 API。免费套餐提供每天 500 次请求。
  * [Mocko.dev](https://mocko.dev/) - 代理你的 API，选择在云端模拟哪些端点并检查流量，完全免费。加速你的开发和集成测试。
  * [Multi-Exit IP Address Checker](https://ip.alstra.ca/) -  免费且简单的工具，可跨多个节点检查你的出口 IP 地址，了解你的 IP 在全球不同区域和服务中的呈现方式。适用于测试 Control D 等基于规则的 DNS 分流工具。
  * [NASdisks Drive Data API](https://www.nasdisks.com/data/) - 免费、无需密钥且启用 CORS 的 API，提供 NAS HDD/SSD 规格、各型号的 CMR/SMR 分类以及源自 Backblaze Drive Stats 的年化故障率。返回 JSON 或 CSV，CC BY 4.0，无需注册。
  * [News API](https://newsapi.org) - 用代码搜索网络新闻并获取 JSON 结果。开发者每天免费获得 100 次查询。文章有 24 小时延迟。
  * [OCR.Space](https://ocr.space/) - OCR API 可解析图片和 PDF 文件，以 JSON 格式返回文本结果。每月 25,000 次请求免费，文件大小限制 1MB。
  * [OpenAPI3 Designer](https://openapidesigner.com/) - 免费以可视化方式创建 OpenAPI 3 定义。
  * [Parseur](https://parseur.com) - 每月 20 个免费页面：从 PDF、电子邮件中提取数据。AI 驱动。拥有完整 API 访问权限。
  * [PDF-API.io](https://pdf-api.io) - PDF 自动化 API，提供可视化模板编辑器或 HTML 转 PDF、动态数据集成以及通过 API 进行 PDF 渲染。免费计划附带一个模板、每月 100 个 PDF。
  * [PDFBolt](https://pdfbolt.com) - 注重隐私的开发者向 PDF 生成 API。提供受 Stripe 启发的文档，每月包含 500 次免费 PDF 转换。
  * [Pexafy](https://docs.pexafy.com) - 跨 9 个免费图片来源（Unsplash、Pexels、Pixabay、Kaboompics 等）的语义图片搜索 API，900 多万张图片统一为一个 JSON 模式，无需为每个来源单独集成。支持自然语言查询、反向图片搜索以及按颜色、方向和许可证筛选。读取端点开放 CORS，因此可直接在浏览器中运行。免费计划包含每月 5,000 次 API 请求和 1 个密钥，无需应用审核。
  * [Pixela](https://pixe.la/) - 免费的 daystream 数据库服务。所有操作均通过 API 执行。还可使用热力图和折线图进行可视化。
  * [Posthook](https://posthook.io) - 安排 webhook 在未来时间触发，具备自动重试、投递追踪和故障告警功能。免费计划包含每月 1,000 个 webhook。
  * [Postman](https://postman.com) - 使用 Postman 这个 API 开发协作平台简化工作流，更快创建更好的 API。Postman 应用可永久免费使用。Postman 云功能在一定限制内也永久免费。
  * [PrefectCloud](https://www.prefect.io/cloud/) - 完整的数据流自动化平台。免费计划包含 5 个已部署工作流和每月 500 分钟无服务器计算额度。
  * [Preset Cloud](https://preset.io/) - 托管的 Apache Superset 服务。最多 5 个用户的团队永久免费，功能包括无限量仪表板和图表、无代码图表构建器和协作式 SQL 编辑器。
  * [ProxySentry](https://proxysentry.io/) - 检测住宅代理和 VPN 的 IP API。ProxySentry.io 在 rapidapi.com 上提供每月 10k 次请求的免费套餐。
  * [Publora](https://publora.com) - 发布 API：一次 HTTPS 调用即可发布或排期到 10 个社交网络，或由 AI 智能体通过 MCP 发布。永久免费：每月 15 条帖子、3 个关联账号，除 X 外的所有网络。
  * [Reducto](https://reducto.ai) - 将任意非结构化文档（PDF、XLSX、JPG、PPTX 等）转化为结构化 JSON 数据。解析、提取数据并编辑 PDF 表单。免费套餐含 15k 免费额度，按量付费。
  * [Rendi](https://rendi.dev) - FFmpeg API - 面向 FFmpeg 的 REST API，无需处理基础设施即可在线运行 FFmpeg。免费套餐有每月处理额度，可使用 4 vCPU。
  * [RequestBin.com](https://requestbin.com) - 创建一个免费端点，你可以向其发送 HTTP 请求。发送到该端点的任何 HTTP 请求都会连同相关负载和标头一起被记录，以便你观察来自 webhook 和其他服务的请求。
  * [Simplescraper](https://simplescraper.io) - 每次操作后触发你的 webhook。免费计划包含 100 个云端抓取额度。
  * [Geekflare API](https://geekflare.com/api/) - Geekflare API 允许你将网站抓取为 Markdown、截图、执行 TLS 扫描和 DNS 查询、测试加载时间等。免费计划提供每月 500 API 额度（例如 500 次 DNS 查询、250 次网页抓取或 100 次截图）。参见[额度映射](https://docs.geekflare.com/api/api-credit-mapping)。
  * [SmartParse](https://smartparse.io) - SmartParse 是数据迁移和 CSV 转 API 平台，提供节省时间和成本的开发者工具。免费套餐包含每月 300 个处理单元、浏览器上传、数据隔离、断路器和任务告警。
  * [Sofodata](https://www.sofodata.com/) - 从 CSV 文件创建安全的 RESTful API。上传 CSV 文件即可通过其 API 即时访问数据，从而加快应用开发。免费计划包含 2 个 API 和每月 2,500 次 API 调用。无需信用卡。
  * [Svix](https://www.svix.com/) - Webhook 即服务。每月最多免费发送 50,000 条消息。
  * [Tavily AI](https://tavily.com/) - 用于在线搜索、快速洞察和综合研究的 API，并具备整理研究结果的能力。免费套餐每月 1000 次请求，无需信用卡。
  * [TemplateFox](https://pdftemplateapi.com) - PDF 生成 API，带可视化模板编辑器、动态数据合并和 7 种语言的 SDK。免费计划包含每月 60 个 PDF 和 3 个模板。
  * [The IP API](https://theipapi.com/) - IP 地理位置 API，每天 1000 次免费请求。提供有关 IP 地址位置的信息，包括国家、城市、地区等。
  * [TinyMCE](https://www.tiny.cloud) - 富文本编辑 API。核心功能可免费无限量使用。
  * [Tomorrow.io Weather API](https://www.tomorrow.io/weather-api/) - 提供免费套餐的天气 API。提供准确、最新的天气预报，具备全球覆盖、历史数据和天气监控解决方案。
  * [Treblle](https://www.treblle.com) - Treblle 帮助团队构建、发布和治理 API。具备高级 API 日志聚合、可观测性、文档和调试功能。所有功能免费，但免费套餐每月最多限制 250k 次请求。
  * [Trophy](https://trophy.so) - Trophy 是面向消费级应用的游戏化层。使用预建 API 和开源 UI 组件来发布成就、连续记录、积分、排行榜等。最多 1,000 个月活跃用户免费。
  * [UniRateAPI](https://unirateapi.com) - 提供 590 多种货币和加密货币的实时汇率。免费计划 API 调用次数不限，非常适合开发者和金融应用。
  * [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的 VAT 编号验证 API。每月 150 次免费验证。
  * [vatnode](https://vatnode.dev) - 欧盟 VAT 编号验证 REST API，以 VIES 和国家税务登记库为后备，返回官方 VIES 查询编号用于审计记录。免费套餐每月 100 次验证，无需信用卡。
  * [WeatherXu](https://weatherxu.com/) - 通过我们的 API 提供全球天气数据，包括当前状况、每小时和每日预报以及天气告警。集成 AI 模型和 ML 系统来分析和组合多个天气模型，以提供更高的预报准确率。免费套餐包含每月 10,000 次 API 调用。
  * [WebScraping.AI](https://webscraping.ai) - 简单的网页抓取 API，内置解析、Chrome 渲染和代理。每月 2,000 次免费 API 调用。
  * [Weights & Biases](https://wandb.ai) - 开发者优先的 MLOps 平台。通过实验追踪、数据集版本控制和模型管理更快构建更好的模型。免费套餐仅限个人项目，包含 100 GB 存储。
  * [What Is My IP](https://whatismyip.help) - 一项免费服务，通过 API 检查你的公共 IPv4 和 IPv6 地址及相关请求数据，提供不同输出格式，适用于自动化、脚本和网络故障排查。
  * [What The Diff](https://whatthediff.ai) - AI 驱动的代码审查助手。免费计划限制为每月 25,000 token（约 10 个 PR）。
  * [XFlux](https://www.xfluxapi.com) - X/Twitter 只读 REST API（个人资料、搜索、时间线）以及账户监控。免费套餐：每月 1,000 次 API 调用、1 个监控器、即时 API 密钥。付费计划（每月 19 美元起）支持 HTTP webhook。
  * [wolfram.com](https://wolfram.com/language/) - 云端内置的基于知识的算法。
  * [wrapapi.com](https://wrapapi.com/) - 将任意网站转化为参数化 API。每月 30k 次 API 调用。
  * [Zipcodebase](https://zipcodebase.com) - 免费邮政编码 API，可访问全球邮政编码数据。每月 5,000 次免费请求。
  * [Zuplo](https://zuplo.com/) - 免费的 API 管理平台，用于在边缘设计、构建和部署 API。几分钟内即可为任意 API 添加 API 密钥认证、速率限制、开发者文档和变现功能。原生支持 OpenAPI，可使用 Web 标准 API 和 TypeScript 完全编程。免费计划提供最多 10 个项目、无限量生产边缘环境、每月 100 万次请求和 10GB 出站流量。
  * [Metashot](https://metashot.io) — Open Graph（OG）社交预览图片生成 API。通过 URL 参数为 Twitter、LinkedIn 和 Facebook 生成动态 1200×630 图片，在 Cloudflare Workers 上进行边缘缓存。免费套餐：每月 1,000 次渲染。付费计划每月 12 美元起。

**[⬆️ 返回顶部](#目录)**

## 制品仓库（Artifact Repos）

  * [Gemfury](https://gemfury.com) - 面向 Maven、PyPi、NPM、Go Module、Nuget、APT 和 RPM 仓库的私有与公共制品仓库。公共项目免费。
  * [jitpack.io](https://jitpack.io/) - 面向 GitHub 上 JVM 和 Android 项目的 Maven 仓库，公共项目免费。
  * [paperspace](https://www.paperspace.com/) - 构建并扩展 AI 模型，开发、训练和部署 AI 应用，免费套餐：公共项目、5GB 存储空间、基础实例。
  * [RepoFlow](https://repoflow.io) - RepoFlow 简化包管理，支持 npm、PyPI、Docker、Go、Helm 等。云端可免费试用，含 10GB 存储、10GB 带宽、100 个软件包和不限用户数；也可自托管，但仅限个人使用。
  * [RepoForge](https://repoforge.io) - 云端托管的私有仓库，支持 Python、Debian、NPM 软件包和 Docker 注册表。开源/公共项目可使用免费套餐。
  * [repsy.io](https://repsy.io) - 1GB 免费私有/公共 Maven 仓库。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具（Tools for Teams and Collaboration）

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理器，适合个人和协作编写代码。
  * [BookmarkOS.com](https://bookmarkos.com) - 免费的一体化书签管理器、标签页管理器和任务管理器，位于可自定义的在线桌面中，支持文件夹协作。
  * [Braid](https://www.braidchat.com/) - 为团队设计的聊天应用。公开访问群组免费，用户数、历史记录和集成均不限。此外还提供可自托管的开源版本。
  * [Calendly](https://calendly.com) - Calendly 是用于联系和安排会议的工具。免费套餐为每位用户提供 1 个日历连接和不限次数的会议。还提供桌面端和移动端应用。
  * [cally.com](https://cally.com/) - 为会议找到最合适的时间和日期。简单易用，对大小型群组都很适用。
  * [cDox](https://cdox.ca) - 在加拿大托管的私有文档编辑器。可撰写、排版、协作文档，并通过简洁的公开链接发布。数据绝不用于 AI 训练。免费套餐含 50MB 存储空间、最多 3 个公开链接，并可导出为 PDF、Word 和 Markdown。
  * [Chanty.com](https://chanty.com/) - Chanty 是 Slack 的另一款替代品。它为小团队（最多 10 人）提供永久免费套餐，含不限数量的公开和私有对话、可搜索的历史记录、不限次数的一对一语音通话、不限数量的语音消息、10 个集成以及每团队 20GB 存储空间。
  * [DevToolLab](https://devtoollab.com) - 在线开发者工具集合，所有基础工具均可免费使用，每个工具可自动保存一条记录，提供标准处理速度和社区支持。
  * [Discord](https://discord.com/) - 带公开/私有房间的聊天工具。支持 Markdown 文本、语音、视频和屏幕共享。不限用户数免费使用。
  * [Dubble](https://dubble.so/) - 免费的分步指南创建工具。可截图、记录流程并与团队协作。还支持异步屏幕录制。
  * [Duckly](https://duckly.com/) - 与团队实时交谈和协作。支持结对编程，含 IDE、终端共享、语音、视频和屏幕共享。小团队免费。
  * [element.io](https://element.io/) - 基于 Matrix 构建的去中心化开源通信工具。支持群聊、私信、加密文件传输、语音和视频聊天，并可轻松与其他服务集成。
  * [evernote.com](https://evernote.com/) - 用于整理信息的工具。分享笔记并与他人协作
  * [Fibery](https://fibery.io/) - 互联式工作区平台。个人用户免费，最多 2GB 磁盘空间。
  * [Fibo](https://fibo.dev) - 免费的在线实时 Scrum 扑克工具，面向敏捷团队，允许不限数量的成员估算故事点，加快规划速度。
  * [Fizzy](https://www.fizzy.do/) - 基于看板的项目管理和问题追踪平台。可创建公开看板、设置 webhook、使用卡片标记，并追踪不限数量的用户——最多 1000 个事项免费。
  * [flat.social](https://flat.social) - 用于团队会议和欢乐时光社交活动的可自定义互动空间。会议次数不限，最多 8 人同时在线免费。
  * [flock.com](https://flock.com) - 让团队沟通更快捷的方式。消息、频道、用户、应用和集成全部免费且不限数量
  * [GhostChat](https://ghostchat.dev) - 隐私优先的网站在线聊天小部件（约 15KB，无 cookie，无跟踪）。免费套餐含 1 个站点、不限数量的消息、内置 AI 聊天机器人（每月 25 条回复）、30 天历史记录、Gmail 会话串、预设回复和推送通知。无需信用卡。
  * [GitBook](https://www.gitbook.com/) - 记录和编写技术知识的平台——从产品文档到内部知识库和 API。面向个人开发者的免费套餐。
  * [GitDailies](https://gitdailies.com) - 每日报告团队在 GitHub 上的提交和 Pull Request 活动。包括 Push 可视化、同事认可系统和自定义告警构建器。免费套餐含不限用户数、3 个仓库和 3 个告警配置。
  * [gitter.im](https://gitter.im/) - 面向 GitHub 的聊天工具。公开和私有房间不限数量，最多 25 人的团队免费
  * [gokanban.io](https://gokanban.io) - 基于语法、无需注册即可快速使用的看板。免费且无任何限制。
  * [Hackmd.io](https://hackmd.io/) - 面向 Markdown 格式文档/文件的实时协作与写作工具。类似 Google Docs，但用于 Markdown 文件。“笔记”数量免费且不限，但私有笔记和模板的协作者（被邀请者）数量[将受到限制](https://hackmd.io/pricing)。
  * [HeySpace](https://hey.space) - 集聊天、日历、时间线和视频通话于一体的任务管理工具。最多 5 位用户免费。
  * [Huly](https://huly.io/) - 一体化项目管理平台（Linear、Jira、Slack、Notion、Motion 的替代品）——不限用户数，每个工作区 10GB 存储、10GB 视频（音频）流量。
  * [Keybase](https://keybase.io/) - Keybase 是 Slack 的一款自由开源软件替代品；它保障从家庭、社区到公司的每个人的聊天和文件安全。
  * [Knocket](https://trtc.io/solutions/knocket) - 面向独立开发者和小团队的永久免费联系层：用于网站和移动应用的在线聊天小部件（通过 WebView 支持 iOS/Android/Flutter/React Native）、可分享的联系页面（Linktree 风格，含社交账号、预约链接和博客），以及统一的 Telegram/邮件收件箱。可直接从 Telegram 回复（无需仪表板）。含会议安排、多语言、浅色/深色主题。配套开源 AI 自动回复代理。无广告，无席位限制。
  * [Linkinize](https://linkinize.com) - 面向团队的书签管理器，支持标签、多工作区和协作。免费套餐含 4 个工作区和 10 名团队成员。
  * [Lockitbot](https://www.lockitbot.com/) - 在 Slack 中预留和锁定会议室、开发环境、服务器等共享资源。最多 2 个资源免费
  * [meet.jit.si](https://meet.jit.si/) - 一键视频通话和屏幕共享，完全免费
  * [Miro](https://miro.com/) - 面向分布式团队的可扩展、安全、跨设备、企业就绪的协作白板。提供免费增值套餐。
  * [Notion](https://www.notion.so/) - Notion 是一款支持 Markdown 的笔记与协作应用，集成了任务、wiki 和数据库。该公司将其描述为用于记笔记、项目管理和任务管理的一体化工作区。除跨平台应用外，还可通过大多数网页浏览器访问。
  * [Nuclino](https://www.nuclino.com) - 轻量级协作式 wiki，用于存放团队的所有知识、文档和笔记。免费套餐含全部核心功能，最多 50 个事项和 5GB 存储空间。
  * [OnlineInterview.io](https://onlineinterview.io/) - 免费的代码面试平台，内置视频聊天、画板和在线代码编辑器，可在浏览器中编译和运行代码。只需一键即可创建远程面试房间。
  * [paste.sh](https://paste.sh/) - 这是一个基于 JavaScript 和 Crypto 的简易粘贴站点。
  * [Pastefy](https://pastefy.app/) - 美观简洁的 Pastebin，支持可选的客户端加密、多标签粘贴、API、高亮编辑器等功能。
  * [Pendulums](https://pendulums.io/) - Pendulums 是一款免费的时间追踪工具，凭借易用的界面和有价值的统计数据帮助你更好地管理时间。
  * [Proton Pass](https://proton.me/pass) - 密码管理器，内置邮件别名、2FA 验证器、共享和通行密钥功能。可在网页、浏览器扩展、移动应用和桌面端使用。
  * [Pullflow](https://pullflow.com) - Pullflow 提供 AI 增强的代码评审协作平台，可跨 GitHub、Slack 和 VS Code 使用。
  * [Pumble](https://pumble.com) - 免费的团队聊天应用。用户数和消息历史不限，永久免费。
  * [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 一款简单的团队工时表和时间追踪应用。免费套餐为最多 10 位用户提供时间追踪和报告生成功能。
  * [Raindrop.io](https://raindrop.io) - 适用于 macOS、Windows、Android、iOS 和网页端的私密安全书签应用。书签和协作免费且不限数量。
  * [Reezn.io](https://reezn.io/) - 面向团队的规格驱动开发工作流：将评审左移，使问题在编写代码之前就被发现，而不是堆积在代码评审阶段。它会在开发过程中构建业务知识图谱，供 AI 代理在后续功能中使用。免费套餐：3 个席位、1 个项目、每月 5 个功能。
  * [Revolt.chat](https://revolt.chat/) - 一款尊重隐私的开源 [Discord](https://discord.com/) 替代品。它还免费提供 Discord 的大多数专有功能。Revolt 是一款安全快速的一体化应用，并且 100% 免费，所有功能均免费。与大多数主流聊天应用不同，它还支持（官方和非官方）插件。
  * [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix 联邦、与其他应用桥接、不限数量消息和完整消息历史记录。
  * [ruttl.com](https://ruttl.com/) - 最佳一体化反馈工具，可收集数字化反馈并评审网站、PDF 和图片。
  * [Screen Sharing via Browser](https://screensharing.net) - 免费的屏幕共享工具，直接从浏览器与协作者共享屏幕，无需下载或注册。完全免费。
  * [seafile.com](https://www.seafile.com/) - 私有或云端存储、文件共享、同步和讨论。云端版本仅有 1GB
  * [SiteDots](https://sitedots.com/) - 直接在你的网站上分享网站项目反馈，无需模拟、画布或变通方案。免费套餐功能完整。
  * [Slab](https://slab.com/) - 面向团队的现代知识管理服务。最多 10 位用户免费。
  * [slack.com](https://slack.com/) - 不限用户数免费，但部分功能受限
  * [StatusPile](https://www.statuspile.com/) - 状态页面中的状态页面。能否追踪你的上游服务商的状态页面？
  * [Stickies](https://stickies.app/) - 用于头脑风暴、内容整理和笔记的可视化协作应用。最多 3 面墙、不限用户数和 1GB 存储空间免费。
  * [MeetBackdrops](https://meetbackdrops.com) - 适用于 Zoom、Microsoft Teams 和 Google Meet 视频通话的免费高清虚拟背景。1000 多个由工作室设计的场景，无需注册。
  * [talky.io](https://talky.io/) - 免费群组视频聊天。匿名。点对点。无需插件、注册或付款
  * [Teamcamp](https://www.teamcamp.app) - 面向软件开发公司的一体化项目管理应用。
  * [Teamhood](https://teamhood.com/) - 免费的项目、任务和问题追踪软件。支持带泳道的看板和完整的 Scrum 实现。内置时间追踪。5 位用户和 3 个项目组合免费。
  * [Teamplify](https://teamplify.com) - 借助团队分析和智能每日站会改进团队开发流程。包含面向远程优先团队的功能齐全的休假管理。最多 5 位用户的小团队免费。
  * [Telegram](https://telegram.org/) - Telegram 适合所有想要快速、可靠的消息和通话的人。企业用户和小团队可能会喜欢大型群组、用户名、桌面应用和强大的文件共享功能。
  * [Tencent RTC](https://trtc.io/) - Tencent Real-Time Communication（TRTC，腾讯实时通信）提供群组音频/视频通话解决方案。首年每月免费 10,000 分钟。
  * [TimeCamp](https://www.timecamp.com/) - 面向不限用户数的免费时间追踪软件。可轻松与 Jira、Trello、Asana 等项目管理工具集成。
  * [tldraw.com](https://tldraw.com) -  免费的开源白板和图表工具，具备智能箭头、自动对齐、便签和 SVG 导出功能。多人模式支持协作编辑。还提供免费的官方 VS Code 扩展。
  * [transfernow](https://www.transfernow.net/) - 最简单、快速、安全的文件传输和共享界面。无需强制订阅即可发送照片、视频和其他大文件。
  * [Tugboat](https://tugboat.qa) - 自动或按需预览每个 Pull Request。所有人免费，非营利组织可获赠 Nano 套餐。
  * [twist.com](https://twist.com) - 一款对异步沟通友好的团队通信应用，对话始终有条理且紧扣主题。提供免费套餐和不限量套餐。符合条件的团队可享折扣。
  * [userforge.com](https://userforge.com/) - 相互关联的在线用户画像、用户故事和上下文映射。 有助于保持设计与开发同步，最多 3 个用户画像和 2 名协作者免费。
  * [Visual Debug](https://visualdebug.com) - 一款可视化反馈工具，用于改善客户与开发者之间的沟通
  * [Webex](https://www.webex.com/) - 视频会议，免费套餐提供每次会议 40 分钟、100 名参会者。
  * [Webvizio](https://webvizio.com) - 网站反馈工具、网站评审软件和缺陷报告工具，可直接在在线网站和 Web 应用、图片、PDF 及设计文件上处理任务，简化 Web 开发协作。
  * [whereby.com](https://whereby.com/) - 一键视频通话，免费（前身为 appear.in）
  * [windmill.dev](https://windmill.dev/) - Windmill 是一个开源开发者平台，可用极简的 Python 和 TypeScript 脚本快速构建生产级多步骤自动化和内部应用。免费用户最多可创建并加入 3 个非高级工作区。
  * [wistia.com](https://wistia.com/) - 视频托管服务，提供观看者分析、高清视频分发和帮助了解访客的营销工具，含 25 个视频和带 Wistia 品牌标识的播放器
  * [wormhol.org](https://www.wormhol.org/) - 简单直接的文件共享服务。可与任意数量的伙伴共享不限数量、单个最大 5GB 的文件。
  * [Wormhole](https://wormhole.app/) - 端到端加密共享最大 5GB 的文件，最长保留 24 小时。对于大于 5GB 的文件，它使用点对点传输直接发送。
  * [zoom.us](https://zoom.us/) - 提供安全的视频和网络会议附加功能。免费套餐限时 40 分钟。
  * [Zulip](https://zulip.com/) - 采用独特类邮件话题串模型的实时聊天。免费套餐含 10,000 条可搜索历史消息和最多 5GB 文件存储。此外还提供可自托管的开源版本。
  * [RightFeature](https://rightfeature.com/) - 轻松收集客户反馈，并将其转化为产品路线图。收集、排定优先级并交付真正对用户重要的功能。
  * [Zeitio](https://zeitio.com/) - 面向自由职业者和小团队的时间追踪与开票工具。免费套餐含 1 位用户、3 个进行中的项目和每月 3 张发票。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统（CMS）

  * [Contentful](https://www.contentful.com/) - 无头 CMS（Headless CMS）。云端的内容管理和交付 API。附带一个免费的 Community 空间，含 5 位用户、25K 条记录、48 种内容类型、2 个语言区域。
  * [Cosmic](https://www.cosmicjs.com/) - 无头 CMS 和 API 工具包。面向开发者的免费个人套餐。
  * [Crystallize](https://crystallize.com) - 支持电商的无头 PIM。内置 GraphQL API。免费版含不限用户数、1000 个目录项、每月 5GB 带宽和每月 25k 次 API 调用。
  * [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费套餐。DatoCMS 是基于 GraphQL 的 CMS。在最低档套餐中，每月有 100k 次调用。
  * [Hygraph](https://hygraph.com/) - 为小型项目提供免费套餐。GraphQL 优先的 API。从传统解决方案迁移到 GraphQL 原生的无头 CMS——并以 API 优先的方式交付全渠道内容。
  * [Prismic](https://www.prismic.io/) - 无头 CMS。带完全托管且可扩展 API 的内容管理界面。Community 计划为 1 位用户提供不限数量的 API 调用、文档、自定义类型、资源和语言区域。涵盖你下一个项目所需的一切。开放内容/开源项目可申请更大的免费套餐。
  * [Sanity.io](https://www.sanity.io/) - 结构化内容平台，具备开源编辑环境和实时托管数据存储。项目数量不限。每个项目免费包含不限数量的管理员用户、3 位非管理员用户、2 个数据集、500K 次 API CDN 请求、10GB 带宽和 5GB 资源。
  * [Solo](https://soloist.ai) - Mozilla 推出的免费 AI 网站创建器，只需简单几步输入即可为你的企业创建美观网站。免费自定义域名，无需信用卡。
  * [Squidex](https://squidex.io/) - 为小型项目提供免费套餐。API/GraphQL 优先。开源，基于事件溯源（自动记录每一次变更）。
  * [Storyblok](https://www.storyblok.com) - 面向开发者和营销人员的无头 CMS，兼容所有现代框架。Community（免费）套餐提供 Management API、可视化编辑器、10 个数据源、自定义字段类型、国际化（语言/区域不限）、资源管理器（最多 2500 个资源）、图片优化服务、搜索查询、Webhook，以及每月 250GB 流量。
  * [TinaCMS](https://tina.io/) - Forestry.io 的替代品。开源、基于 Git 的无头 CMS，支持 Markdown、MDX 和 JSON。基础版本免费，可供 2 位用户使用。
  * [WPJack](https://wpjack.com) - 在 5 分钟内于任意云端搭建 WordPress！免费套餐含 1 台服务器、2 个站点、免费 SSL 证书和不限数量的 cron 任务。无时间限制或到期日——你的网站，你做主。

**[⬆️ 返回顶部](#目录)**

## 代码生成（Code Generation）

* [Appinvento](https://appinvento.io/) - 免费的无代码应用构建器。可完全访问自动生成的后端源代码，并允许不限数量的 API 和路由。免费套餐含 3 个项目和 5 张表。
* [DhiWise](https://www.dhiwise.com/) - 将 Figma 设计转换为动态的 Flutter 和 React 应用。其代码生成技术旨在优化构建生产级移动和 Web 体验的工作流。
* [Karbon Sites](https://www.karbonsites.space) - AI 驱动的网站构建器和编辑器，可根据文本提示、草图或简历生成生产级前端代码。功能包括原生 Android（APK）导出，免费套餐每月可生成 5 次（使用自定义 Gemini API 密钥则不限次数）。
* [Metalama](https://www.postsharp.net/metalama) - 一款专用于 C# 的工具，在编译期间动态生成样板代码以保持源代码整洁。开源项目免费；其对商业友好的免费套餐最多包含 3 个 aspect。
* [Supermaven](https://www.supermaven.com/) - 适用于 VS Code、JetBrains 和 Neovim 的高速 AI 代码补全插件。免费套餐提供不限数量的内联补全，专注于超低延迟。
* [v0.dev](https://v0.dev/) - 由 Vercel 创建，v0 使用 shadcn/ui 和 Tailwind CSS 生成便于复制粘贴的 React 代码。它采用积分制，提供 1,200 初始积分和每月 200 免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量（Code Quality）

  * [beanstalkapp.com](https://beanstalkapp.com/) - 用于编写、评审和部署代码的完整工作流），免费账户含 1 位用户和 1 个带 100MB 存储空间的仓库
  * [codacy.com](https://www.codacy.com/) - 针对 PHP、Python、Ruby、Java、JavaScript、Scala、CSS 和 CoffeeScript 的自动化代码评审，不限数量的公共和私有仓库免费
  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向 DevOps 的自动化基础设施即代码评审工具，与 GitHub、Bitbucket 和 GitLab（甚至自托管）集成。除标准语言外，它还分析 Ansible、Terraform、CloudFormation、Kubernetes 等。（开源免费）
  * [codecov.io](https://codecov.io/) - 代码覆盖率工具（SaaS），开源项目免费，并提供 1 个免费私有仓库
  * [CodeFactor](https://www.codefactor.io) - 面向 Git 的自动化代码评审。免费版含不限用户数、公共仓库和 1 个私有仓库。
  * [coderabbit.ai](https://coderabbit.ai) - AI 驱动的代码评审工具，与 GitHub/GitLab 集成。免费套餐含每小时 200 个文件、每小时 3 次评审和每小时 50 次对话。开源项目永久免费。
  * [CodSpeed](https://codspeed.io) - 在 CI 流水线中自动化性能追踪。凭借精确且一致的指标，在部署前发现性能回退。开源项目永久免费。
  * [coveralls.io](https://coveralls.io/) - 展示测试覆盖率报告，开源项目免费
  * [deepscan.io](https://deepscan.io) - 用于自动发现 JavaScript 代码中运行时错误的高级静态分析，开源项目免费
  * [DeepSource](https://deepsource.io/) - DeepSource 持续分析源代码变更，发现并修复归类为安全、性能、反模式、缺陷风险、文档和风格的问题。与 GitHub、GitLab 和 Bitbucket 原生集成。
  * [DiffText](https://difftext.com) - 即时找出两段代码之间的差异。完全免费使用。
  * [eversql.com](https://www.eversql.com/) - EverSQL——排名第一的数据库优化平台。自动获得有关数据库和 SQL 查询的关键洞察。
  * [gerrithub.io](https://review.gerrithub.io/) - 免费为 GitHub 仓库提供 Gerrit 代码评审
  * [goreportcard.com](https://goreportcard.com/) - Go 项目的代码质量检查，开源项目免费
  * [gtmetrix.com](https://gtmetrix.com/) - 提供优化网站的报告和详尽建议
  * [holistic.dev](https://holistic.dev/) - 排名第一的 PostgreSQL 优化静态代码分析器。自动检测性能、安全和数据库架构问题的服务
  * [houndci.com](https://houndci.com/) - 在 GitHub 提交上评论代码质量问题，开源项目免费
  * [reviewable.io](https://reviewable.io/) - 面向 GitHub 仓库的代码评审，公共或个人仓库免费。
  * [scan.coverity.com](https://scan.coverity.com/) - 针对 Java、C/C++、C# 和 JavaScript 的静态代码分析，开源项目免费
  * [scrutinizer-ci.com](https://scrutinizer-ci.com/) - 持续检查平台，开源项目免费
  * [semanticdiff.com](https://app.semanticdiff.com/) - 面向 GitHub Pull Request 和提交的编程语言感知差异对比，公共仓库免费
  * [shields.io](https://shields.io) - 为开源项目提供高质量元数据徽章
  * [sonarcloud.io](https://sonarcloud.io) - 针对 Java、JavaScript、C/C++、C#、VB.NET、PHP、Objective-C、Swift、Python、Groovy 等更多语言的自动化源代码分析，开源项目免费

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览（Code Search and Browsing）

  * [CodeKeep](https://codekeep.io) - 代码片段版的 Google Keep。可整理、发现和分享代码片段，提供带预设模板的强大代码截图工具和链接功能。
  * [libraries.io](https://libraries.io/) - 针对 32 种不同包管理器的搜索和依赖更新通知，开源免费
  * [Namae](https://namae.dev/) - 在 GitHub、Gitlab、Heroku、Netlify 等各类网站上搜索你的项目名称是否可用。
  * [tickgit.com](https://www.tickgit.com/) - 展示 `TODO` 注释（及其他标记），以识别值得回头改进的代码区域。

**[⬆️ 返回顶部](#目录)**

## 持续集成与持续部署（CI and CD）

  * [appcircle.io](https://appcircle.io) - 企业级移动 DevOps 平台，自动化移动应用的构建、测试和应用商店发布，实现更快速高效的发布周期。免费额度为每次构建最长 30 分钟、每月 20 次构建和 1 个并发构建。
  * [appveyor.com](https://www.appveyor.com/) - 面向 Windows 的 CD 服务，开源项目免费
  * [bitrise.io](https://www.bitrise.io/) - 面向原生或混合移动应用的 CI/CD。每月 200 次免费构建、10 分钟构建时长和 2 名团队成员。OSS 项目可获 45 分钟构建时长、+1 并发数和不限团队人数。
  * [buddy.works](https://buddy.works/) - 一款 CI/CD，含 5 个免费项目和 1 个并发运行（每月 120 次执行）
  * [Buildkite](https://buildkite.com) - CI 流水线，3 位用户和每月 5k 任务分钟免费。Test Analytics 免费
    开发者套餐含每月 100k 次测试执行，开源项目还包含更多免费额度。
  * [bytebase.com](https://www.bytebase.com/) - 数据库 CI/CD 和 DevOps。20 位用户以下和 10 个数据库实例免费
  * [CircleCI](https://circleci.com/) - 托管 CI/CD 服务中的综合免费套餐，包含全部功能，适用于 GitHub、GitLab 和 BitBucket 仓库。支持多种资源类别、Docker、Windows、Mac OS、ARM 执行器、本地运行器、测试拆分、Docker 层缓存及其他高级 CI/CD 功能。私有项目可享每月最多 6000 分钟执行时间、不限协作者数量、30 个并行任务，开源项目可享最多 80,000 免费构建分钟。
  * [cirun.io](https://cirun.io) - 公共 GitHub 仓库免费
  * [codemagic.io](https://codemagic.io/) - 每月免费 500 构建分钟
  * [deployhq.com](https://www.deployhq.com/) - 1 个项目，每天 10 次部署（每月 30 构建分钟）
  * [LocalOps](https://localops.co/) - 在 30 分钟内将应用部署到 AWS/GCP/Azure。在任意云端搭建标准化应用环境，内置持续部署自动化和高级可观测性。免费套餐允许 1 位用户和 1 个应用环境。
  * [Make](https://www.make.com/en) - 这款工作流自动化工具可让你通过 UI 连接应用并自动化工作流。它支持众多应用和最流行的 API。公共 GitHub 仓库免费，免费套餐含 100MB、1000 次操作和 15 分钟最小间隔。
  * [Mergify](https://mergify.com) - GitHub 工作流自动化和合并队列——公共 GitHub 仓库免费
  * [Nx Cloud](https://nx.dev/ci) - Nx Cloud 通过远程缓存、跨机器任务分发甚至自动化拆分 e2e 测试运行等功能加速 CI 上的 monorepo。提供免费套餐，最多支持 30 名贡献者，并包含丰厚的 150k 积分。
  * [RunMyJob](https://runmyjob.io) - 借助实时扩缩容的 Spike 实例，更智能地运行 GitHub Actions 和 GitLab CI 流水线。免费套餐含 400 vCPU-分钟、800 GB-分钟和 10 个并发任务，使用高性能运行器（每个任务 12 vCPU 和 32GB RAM）。
  * [Shipfox](https://www.shipfox.io/) - 让你的 GitHub Actions 运行速度提升 2 倍，每月免费 3,000 构建分钟。
  * [Spacelift](https://spacelift.io/) - 基础设施即代码管理平台。免费套餐功能：IaC 协作、Terraform 模块注册表、ChatOps 集成、基于 Open Policy Agent 的持续资源合规、SAML 2.0 SSO 以及公共 worker 池访问权限：每月最多 200 分钟
  * [Squash Labs](https://www.squash.io/) - 为每个分支创建一台 VM，并通过唯一 URL 提供应用访问，公共和私有仓库不限数量，VM 规格最大 2GB。
  * [Terramate](https://terramate.io/) - Terramate 是面向 Terraform、OpenTofu 和 Terragrunt 等基础设施即代码（IaC）工具的编排和管理平台。最多 2 位用户免费，包含全部功能。
  * [Terrateam](https://terrateam.io) - GitOps 优先的 Terraform 自动化，具备 Pull Request 驱动的工作流、通过自托管运行器实现项目隔离，以及用于有序操作的分层运行。最多 3 位用户免费。
  * [Trigger.dev](https://trigger.dev) - 开源后台任务和 AI 代理平台，具备持久任务、无超时和实时特性。免费套餐含每月 $5 计算积分、20 个并发运行、不限数量任务、5 名团队成员、10 个调度和 1 天日志保留期。

**[⬆️ 返回顶部](#目录)**

## 测试（Testing）

  * [Appetize](https://appetize.io) - 直接在浏览器中通过云端 Android 手机/平板模拟器和 iPhone/iPad 模拟器测试你的 Android 和 iOS 应用。免费套餐含 2 个并发会话，每月 30 分钟使用时长。应用大小无限制。
  * [Argos](https://argos-ci.com) - 面向开发者的开源可视化测试。项目数量不限，每月 5,000 张截图。开源项目免费。
  * [Bencher](https://bencher.dev/) - 持续基准测试工具套件，用于发现 CI 性能回退。所有公共项目免费。
  * [BugBug](https://bugbug.io/) - 轻量级 Web 应用测试自动化工具。易于学习，无需编码。你可以在自己的电脑上免费运行不限数量的测试。还可额外按月付费获得云端监控和 CI/CD 集成。
  * [checkbot.io](https://www.checkbot.io/) - 浏览器扩展，可检测你的网站是否遵循 50 多项 SEO、速度和安全最佳实践。小型网站可使用免费套餐。
  * [Checkly](https://checklyhq.com) - 面向现代 DevOps 的代码优先合成监控。以传统供应商零头的价格监控你的 API 和应用。基于监控即代码工作流和 Playwright。为开发者提供丰厚的免费套餐。
  * [CORS-Tester](https://cors-error.dev/cors-tester/) - 免费工具，供开发者和 API 测试人员检查 API 是否为指定域名启用了 CORS 并找出差距。获得可付诸行动的洞察。
  * [cypress.io](https://www.cypress.io/) - 对任何在浏览器中运行的内容进行快速、简单、可靠的测试。Cypress Test Runner 始终免费且开源，没有任何限制。Cypress Dashboard 对最多 5 位用户的开源项目免费。
  * [everystep-automation.com](https://www.everystep-automation.com/) - 记录并重放在网页浏览器中执行的所有步骤并生成脚本，选项较少的版本免费
  * [gridlastic.com](https://www.gridlastic.com/) - Selenium Grid 测试，免费套餐支持最多 4 个并发 Selenium 节点/10 次网格启动/每月 4,000 测试分钟
  * [katalon.com](https://katalon.com) - 提供测试平台，帮助不同规模、不同测试成熟度的团队，包括  Katalon Studio、TestOps（视觉测试免费）、TestCloud 和 Katalon Recorder。
  * [Keploy](https://keploy.io/) - Keploy 是面向开发者的功能测试工具包。录制 API 调用即可为 API 生成 E2E 测试（KTests）以及 mock 或 stub（KMocks）。开源项目免费。
  * [Lastest](https://lastest.cloud) - 快速交付，不出故障。AI 辅助的可视化验证和真正值得信赖的测试。永久免费套餐：1 个项目、每月 500 运行器分钟、1 个并发运行、无需信用卡。
  * [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建 API 测试和负载测试。每月免费模拟最多 50 个并发用户、最长 60 分钟。
  * [lost-pixel.com](https://lost-pixel.com) - 为你的 Storybook、Ladle、Histoire 故事和 Web 应用提供全面的视觉回归测试。团队成员不限，开源完全免费，每月 7,000 张快照。
  * [OpenWebhook](https://openwebhook.co) - 临时 webhook URL 和实时检查器。无需注册。事件历史保存在浏览器中。自定义 slug 和远程转发为付费功能。
  * [pagegym.com](https://pagegym.com) - 加载行为和页面速度分析与优化工具。免费套餐提供每天 10 次测试、每周 5 个实验和每月最多 15GB 摄入数据。
  * [percy.io](https://percy.io) - 为任何 Web 应用、静态站点、样式指南或组件库添加可视化测试。 团队成员不限，提供 Demo 应用和不限数量的项目，每月 5,000 张快照。
  * [qase.io](https://qase.io) - 面向开发和 QA 团队的测试管理系统。管理测试用例、组织测试运行、执行测试、追踪缺陷并衡量影响。免费套餐含全部核心功能，提供 500MB 附件空间，最多 3 位用户。
  * [Repeato](https://repeato.app/) - 基于计算机视觉和 AI 构建的无代码移动应用测试自动化工具。
    适用于原生应用、Flutter、React Native、Web、Ionic 等众多应用框架。免费套餐限于 iOS 10 个测试和 Android 10 个测试，但包含付费套餐的大部分功能，包括不限次数的测试运行。
  * [Requestly](https://requestly.com/) - 用于拦截、重定向和模拟 HTTP 请求的开源 Chrome 扩展。
    包含 [Debugger](https://requestly.com/products/web-debugger/)、[Mock Server](https://requestly.com/products/mock-server/)、[API Client](https://requestly.com/products/api-client/) 和 [Session Recording](https://requestly.com/products/session-book/)。  可重定向 URL、修改 HTTP 标头、模拟 API、注入自定义 JS、修改 GraphQL 请求、生成模拟 API 端点、录制含网络和控制台日志的会话。免费套餐最多可创建 10 条规则。开源免费。
  * [Sample Files](https://mzeeshan.me/tools/sample-files) - 涵盖视频、音频、文档和压缩包格式的免费测试文件合集，可用于测试和 QA。
  * [seotest.me](https://seotest.me/) - 免费的站内 SEO 网站检测工具。每天 10 次免费网站爬取。提供实用的 SEO 学习资源和建议，说明无论采用何种技术，如何改善任何网站的站内 SEO 效果。
  * [Sherlo](https://sherlo.io) - 面向 React Native 应用的视觉回归测试。免费套餐：每月 1,000 张快照、iOS 和 Android 模拟器。
  * [snippets.uilicious.com](https://snippets.uilicious.com) - 类似 CodePen，但用于跨浏览器测试。UI-licious 让你像写用户故事一样编写测试，并提供免费平台 UI-licious Snippets，允许你在 Chrome 上运行不限数量的测试，无需注册，每次测试运行最长 3 分钟。发现缺陷了？你可以复制测试的唯一 URL，向开发者准确展示如何复现该缺陷。
  * [SSR (Server-side Rendering) Checker](https://www.crawlably.com/ssr-checker/) - 通过直观对比页面的服务器渲染版本与常规版本，检查任意 URL 的 SSR（服务器端渲染）。
  * [testingbot.com](https://testingbot.com/) - Selenium 浏览器和设备测试，[开源免费](https://testingbot.com/open-source)
  * [Testspace.com](https://testspace.com/) - 用于发布自动化测试结果的仪表板，以及使用 GitHub 将手动测试作为代码实现的框架。该服务[对开源免费](https://github.com/marketplace/testspace-com)，账户每月含 450 个结果。
  * [tesults.com](https://www.tesults.com) - 测试结果报告和测试用例管理。与流行测试框架集成。开源软件开发者、个人、教育工作者和刚起步的小团队可申请基础免费项目之外的折扣和免费产品。
  * [UseWebhook.com](https://usewebhook.com) - 从浏览器捕获和检查 webhook。可转发到 localhost，或从历史记录重放。免费使用。
  * [Vaadin](https://vaadin.com) - 使用 Java 或 TypeScript 构建可扩展的 UI，并利用集成工具、组件和设计系统更快迭代、更好设计并简化开发流程。项目数量不限，含 5 年免费维护。
  * [VibeView](https://vibeview.io) - 基于浏览器的 iOS、Android、Apple TV 和 Android TV 模拟器，可通过录制的流程或自然语言指令进行 AI 驱动的测试自动化。免费套餐含 2 个并发会话和每月 30 分钟流式时长。自带 API 密钥可绕过内置的 AI 使用额度。
  * [webhook.site](https://webhook.site) - 通过自定义 URL 验证 webhook、出站 HTTP 请求或邮件。临时 URL 和邮箱地址始终免费。
  * [websitepulse.com](https://www.websitepulse.com/tools/) - 各类免费网络和服务器工具。
  * [kogiQA](https://kogiqa.com) - 一款无需选择器即可工作的 Web UI 自动化工具。每位开发者每月可免费获得 500 个操作。

**[⬆️ 返回顶部](#目录)**

## 安全与 PKI（Security and PKI）

  * [aikido.dev](https://www.aikido.dev) - 一体化应用安全平台，涵盖 SCA、SAST、CSPM、DAST、密钥、IaC、恶意软件、容器扫描、EOL……免费套餐含 2 位用户、扫描 10 个仓库、1 个云、2 个容器和 1 个域名。
  * [CertKit](https://www.certkit.io/certificate-management) - 管理 SSL 证书的签发、续期和监控。可搜索证书透明度日志。Beta 结束后 3 张证书和 1 位用户免费。
  * [CertObserver CT Search](https://certobserver.com/ct-search) - 查找记录在证书透明度日志中的公开 SSL/TLS 证书。CT 搜索免费，但 CT 监控不免费。
  * [CertPost](https://www.certpost.ai) - 对 443 端口或自定义端口（SMTP/IMAP）进行实时 SSL/TLS 证书监控。在线读取所服务的证书、进行完整证书链验证，并在到期前通过邮件或 webhook 告警。免费套餐含 3 张永久监控的证书。
  * [Corgea](https://corgea.com/) - 免费的自主安全平台，可跨 20 多种语言和框架发现、验证并修复不安全的代码和软件包。免费套餐含 1 位用户和 2 个仓库。
  * [crypteron.com](https://www.crypteron.com/) - 云优先、开发者友好的安全平台，可防止 .NET 和 Java 应用中的数据泄露
  * [CyberChef](https://gchq.github.io/CyberChef/) - 简单直观的 Web 应用，无需使用复杂工具或编程语言即可分析和解码/编码数据。堪称密码学与加密的瑞士军刀。所有功能均可免费使用且没有限制。如需自托管，它是开源的。
  * [Datree](https://www.datree.io/) - 开源 CLI 工具，通过确保清单和 Helm 图表遵循最佳实践以及你所在组织的策略，防止 Kubernetes 配置错误
  * [Dependabot](https://dependabot.com/) - 面向 Ruby、JavaScript、Python、PHP、Elixir、
    Rust、Java（Maven 和 Gradle）、.NET、Go、Elm、Docker、Terraform、Git 子模块和 GitHub Actions 的自动化依赖更新。
  * [DJ Checkup](https://djcheckup.com) - 使用这款免费的自动化检查工具扫描你的 Django 站点的安全缺陷。派生自 Pony Checkup 站点。
  * [Doppler](https://doppler.com/) - 通用密钥管理器，用于管理应用密钥和配置，支持同步到各类云服务商。5 位用户免费，提供基础访问控制。
  * [Dotenv](https://dotenv.org/) - 快速且安全地同步你的 .env 文件。不要再通过 Slack 和邮件等不安全渠道分享 .env 文件，也永不再丢失重要的 .env 文件。最多 3 名队友免费。
  * [GitGuardian](https://www.gitguardian.com) - 通过自动化密钥检测和修复，让密钥远离源代码。可扫描 git 仓库中的 350 多种密钥类型和敏感文件——个人及 25 名开发者以下的团队免费。
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费搜索公开 GitHub 仓库、gist、issue 和评论中暴露的 2000 万个密钥
  * [Have I been pwned?](https://haveibeenpwned.com) - 用于获取数据泄露信息的 REST API。
  * [HimitsuShell](https://himitsushell.com) - 一款 shell 脚本 DRM 编译器，使用嵌入式 shell 解释器和反调试技术将 shell 脚本转换为混淆二进制文件（shc 的替代品）。免费网页版不限次数。
  * [hostedscan.com](https://hostedscan.com) - 面向 Web 应用、服务器和网络的在线漏洞扫描器。每月 10 次免费扫描。
  * [Infisical](https://infisical.com/) - 开源平台，让你跨团队和基础设施管理开发者密钥：覆盖从本地开发到预发布/生产环境第三方服务的各个环节。最多 5 名开发者免费。
  * [inspect.software](https://inspect.software/) - 自动化开源仓库审计的公开记录：安全态势、可维护性、依赖健康度和恶意软件包检查，附带版本化方法论和评级徽章。免费套餐：完全访问所有已发布报告、自动覆盖达到公共利益阈值的仓库（≥500 星、≥50 fork，或组织所有且 ≥250 星）、可嵌入徽章，以及为低于阈值的仓库提供 100 初始积分（5 次检查）。
  * [Internet.nl](https://internet.nl) - 测试 IPv6、DNSSEC、HTTPS、DMARC、STARTTLS 和 DANE 等现代互联网标准
  * [IntoDNS.ai](https://intodns.ai) - DNS 和邮件安全分析器，可检查 SPF、DKIM、DMARC、DNSSEC、BIMI、MTA-STS 和 40 多个黑名单，并提供 AI 驱动的解释和修复建议。100% 免费，无需注册。
  * [letsencrypt.org](https://letsencrypt.org/) - 免费 SSL 证书颁发机构，其证书受所有主流浏览器信任
  * [meterian.io](https://www.meterian.io/) - 监控 Java、JavaScript、.NET、Scala、Ruby 和 NodeJS 项目依赖中的安全漏洞。1 个私有项目免费，开源项目数量不限。
  * [Mozilla Observatory](https://observatory.mozilla.org/) - 发现并修复你网站中的安全漏洞。
  * [Otterwatch](https://otterwatch.dev/) - 每日 SSL/TLS 证书监控：到期告警（30/7/1 天）、证书链和 OCSP 吊销检查，以及证书透明度签发历史。5 个域名永久免费，无需信用卡。
  * [Protectumus](https://protectumus.com) - 免费的网站安全检查、站点杀毒和面向 PHP 的服务器防火墙（WAF）。免费套餐为注册用户提供邮件通知。
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) - 针对公共云基础设施的高置信度失陷指标（IOC），一部分可在 GitHub 上获取（https://github.com/unknownhad/AWSAttacks）。完整列表可通过 API 获取
  * [pyup.io](https://pyup.io) - 监控 Python 依赖的安全漏洞并自动更新。1 个私有项目免费，开源项目数量不限。
  * [qualys.com](https://www.qualys.com/community-edition) - 发现 Web 应用漏洞，审计 OWASP 风险
  * [SikkerKey](https://sikkerkey.com) - 机器认证的密钥管理器，免费包含 2 个项目、2 台引导机器、20 个密钥和 7 天审计日志保留期。
  * [Smart Grow Vault](https://vault.smart-grow.app/) - 用于管理环境变量和密钥的安全企业级平台。免费套餐含每个项目最多 3 个应用和 150 个密钥。
  * [Socket](https://socket.dev) - 面向个人开发者、小团队和开源项目的免费供应链安全服务。包含免费应用和防火墙 CLI 工具，保护你的代码免受有漏洞和恶意的依赖侵害。可检测 70 多种供应链风险指标。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) - 对任意 SSL Web 服务器的配置进行深入分析
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检查和恶意软件扫描器
  * [TestTLS.com](https://testtls.com) - 测试 SSL/TLS 服务的安全服务器配置、证书、证书链等。不限于 HTTPS。
  * [Virgil Security](https://virgilsecurity.com/) - 用于在你的数字解决方案中实现端到端加密、数据库保护、IoT 安全等的工具和服务。最多 250 位用户的应用免费。
  * [semgrep](https://semgrep.dev) - 通过 SAST 和 SCA 扫描代码中的安全问题和有漏洞的依赖。免费套餐含最多 10 名贡献者和 10 个私有仓库（公共仓库不限）。

**[⬆️ 返回顶部](#目录)**

## 认证、授权与用户管理（Authentication, Authorization, and User Management）

  * [360username](https://360username.com/) - 一款免费工具，可在 90 多个社交平台上搜索用户名，查找匹配的个人资料。
  * [Aserto](https://www.aserto.com) - 面向应用和 API 的细粒度授权即服务。免费支持最多 1000 个 MAU 和 100 个授权器实例。
  * [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成 SSO、MFA、无密码认证等功能。包含面向前端和后端应用的 SDK。免费支持最多 1000 个 MAU 和五个身份提供商。
  * [Auth0](https://auth0.com/) - 托管式 SSO。免费套餐包含 25,000 个 MAU、不限数量的社交连接、一个自定义域名等。
  * [Authgear](https://www.authgear.com) - 数分钟内为你的应用接入无密码登录、OTP、2FA、SSO，包含全套前端。免费支持最多 5000 个 MAU。
  * [Authress](https://authress.io/) - 身份验证登录与访问控制，任何项目均可使用不限数量的身份提供商，支持 Facebook、Google、Twitter 等。前 1000 次 API 调用免费。
  * [Authy](https://authy.com) - 多设备双因素认证（2FA），支持备份，可直接替换 Google Authenticator。免费支持最多 100 次成功认证。
  * [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，用于编写、测试和部署访问策略。提供细粒度授权与访问控制，免费支持最多 100 个月度活跃主体。
  * [Clerk](https://clerk.com) - 用户管理、身份验证、2FA/MFA，以及用于登录、注册、用户资料等的预置 UI 组件。免费套餐包含不限数量的应用、每应用 50,000 MRU 上限、3 个仪表板席位等。
  * [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak 身份与访问管理即服务。免费支持最多 100 个用户和一个 realm。
  * [Descope](https://www.descope.com/) - 高度可定制的 AuthN 流程，同时提供无代码和 API/SDK 两种方式；每月免费 7,500 个活跃用户、50 个租户（最多 5 个 SAML/SSO 租户）。
  * [duo.com](https://duo.com/) - 面向网站或应用的双因素认证（2FA）。十名用户免费，支持所有认证方式，集成数量不限，并提供硬件令牌。
  * [Kinde](https://kinde.com/) - 简单、可靠的身份验证，数分钟即可集成到你的产品中。入门所需的一切，含 7,500 个免费 MAU。
  * [logintc.com](https://www.logintc.com/) - 通过推送通知进行双因素认证（2FA），十名用户免费，支持 VPN、网站和 SSH
  * [Logto](https://logto.io/) - 开发、保护和管理你产品的用户身份——同时覆盖身份验证与授权。免费支持最多 5,000 个 MAU，并提供开源自托管选项。
  * [MojoAuth](https://mojoauth.com/) - MojoAuth 让你在数分钟内即可为 Web、移动或任何应用轻松实现无密码身份验证。
  * [Okta](https://developer.okta.com/signup/) - 用户管理、身份验证与授权。最多 100 个月活跃用户免费。
  * [Ory](https://ory.sh/) - AuthN/AuthZ/OAuth2.0/零信任托管安全平台。永久免费的开发者账户包含全部安全功能、不限团队成员、200 个日活跃用户，以及每月 25,000 次权限检查。
  * [Permit.io](https://permit.io) - 授权即服务平台，为可扩展的微服务启用 RBAC、ABAC 和 ReBAC，支持实时更新和无代码策略 UI。提供 1000 个月活用户的免费套餐。
  * [Phase Two](https://phasetwo.io) - Keycloak 开源身份与访问管理。免费 realm 支持最多 1000 个用户、最多 10 个 SSO 连接，基于 Phase Two 增强版 Keycloak 容器，内含 [Organization](https://phasetwo.io/product/organizations/) 扩展。
  * [PropelAuth](https://propelauth.com) - 只需几行代码即可立即向各种规模的公司销售，免费支持最多 200 个用户和 10,000 封事务性邮件（带有 “Powered by PropelAuth” 水印品牌标识）。
  * [Scalekit](https://scalekit.com) - 面向 B2B SaaS 的企业级 SSO（SAML、OIDC）、SCIM 用户配置和社交登录。免费套餐包含 100 万 MAU、100 个组织、1 个 SSO 连接和 1 个 SCIM 连接。
  * [Stack Auth](https://stack-auth.com) - 不糟糕的开源身份验证。对开发者最友好的方案，只需五分钟即可上手。可免费自托管，也提供托管 SaaS 版本，含 10,000 个免费月活用户。
  * [Stytch](https://www.stytch.com/) - 一体化平台，提供身份验证和欺诈防范的 API 与 SDK。免费套餐包含 10,000 个月活用户、不限数量的组织、5 个 SSO 或 SCIM 连接，以及 1,000 个 M2M 令牌。
  * [SuperTokens](https://supertokens.com/) - 开源用户身份验证，原生集成到你的应用中——让你快速上手，同时掌控用户与开发者体验。免费支持最多 5000 个 MAU。
  * [Unkey](https://www.unkey.com/) - 开源 API 密钥管理与限流平台。每月免费支持最多 100,000 次请求和 100 个活跃 API 密钥，可完整使用密钥创建、吊销和限流功能。
  * [WorkOS](https://workos.com/) - 最多 100 万 MAU 的免费用户管理与身份验证。支持邮箱加密码、社交登录、Magic Auth、MFA 等。
  * [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理，支持多租户（B2B）场景。免费支持最多 25,000 个已认证请求，包含全部安全功能（OTP、无密码、策略等均无付费墙）。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈（Mobile App Distribution and Feedback）

  * [Appho.st](https://appho.st) - 移动应用托管平台。免费套餐包含五个应用、每月 50 次下载，最大文件大小为 100 MB。
  * [Diawi](https://www.diawi.com) - 将 iOS 和 Android 应用直接部署到设备。免费套餐：应用上传、密码保护链接、1 天有效期、十次安装。
  * [GetUpdraft](https://www.getupdraft.com) - 分发移动应用用于测试。免费套餐包含一个应用项目、三个应用版本、500 MB 存储空间，以及每月 100 次应用安装。
  * [InstallOnAir](https://www.installonair.com) - 通过空中下载分发 iOS 和 Android 应用。免费套餐：上传次数不限、私密链接、访客链接 2 天有效期，注册用户 60 天。
  * [Loadly](https://loadly.io) - iOS 和 Android Beta 应用分发服务，提供完全免费的服务，下载次数不限、高速下载、上传次数不限。
  * [DistApp](https://distapp.app) - 管理和分发 Android、iOS 及桌面应用，适合测试人员或自行分发。可免费试用：2 个应用、1 个组织、100 MB 存储，下载次数不限；也可自行自托管。

**[⬆️ 返回顶部](#目录)**

## 管理系统（Management System）

  * [bitnami.com](https://bitnami.com/) - 在 IaaS 上部署预置应用。可免费管理 1 个 AWS 微型实例
  * [Esper](https://esper.io) - 面向 Android 设备的 MDM 和 MAM，带 DevOps 能力。一百台设备免费，含一个用户许可和 25 MB 应用存储。
  * [jamf.com](https://www.jamf.com/) -  iPad、iPhone 和 Mac 的设备管理，三台设备免费
  * [Miradore](https://miradore.com) - 设备管理服务。随时掌握设备队列的最新状态，免费保护不限数量的设备。免费套餐提供基础功能。
  * [ploi.io](https://ploi.io/) - 服务器管理工具，可轻松管理和部署服务器与站点。一台服务器免费。
  * [runcloud.io](https://runcloud.io/) - 主要面向 PHP 项目的服务器管理。最多 1 台服务器免费。
  * [serveravatar.com](https://serveravatar.com) - 通过自动化配置管理和监控基于 PHP 的 Web 服务器。一台服务器免费。
  * [xcloud.host](https://xcloud.host) - 界面友好的服务器管理与部署平台。提供一台服务器的免费套餐。

**[⬆️ 返回顶部](#目录)**

## 消息与流处理（Messaging and Streaming）

  * [Ably](https://www.ably.com/) - 实时消息服务，支持在线状态、持久化和保证投递。免费套餐包含每月 300 万条消息、100 个峰值连接和 100 个峰值频道。
  * [cloudamqp.com](https://www.cloudamqp.com/) - RabbitMQ 即服务。Little Lemur 套餐：每月最多 100 万条消息、最多 20 个并发连接、最多 100 个队列、最多 10,000 条排队消息，多个节点分布在不同可用区
  * [courier.com](https://www.courier.com/) - 单一 API 集成推送、应用内、邮件、聊天、短信等消息渠道，并提供模板管理等功能。免费套餐包含每月 10,000 条消息。
  * [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 可扩展、安全的无服务器 MQTT broker，数秒即可开通。永久免费每月 100 万个会话分钟（无需信用卡）。
  * [Engage](https://engage.so/) - 面向 SaaS 的一体化客户互动与自动化工具（邮件、推送、短信、产品引导、横幅等）。每月最多 1,000 个活跃用户免费。
  * [engagespot.co](https://engagespot.co/) - 面向开发者的多渠道通知基础设施，带预置应用内收件箱和无代码模板编辑器。免费套餐包含每月 10,000 条消息。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将你的 MQTT 设备连接到云原生 IoT 消息 broker。永久免费连接最多 100 台设备（无需信用卡）。
  * [httpSMS](https://httpsms.com) - 将你的 Android 手机用作 SMS 网关来收发短信。每月免费收发最多 200 条消息。
  * [knock.app](https://knock.app) - 面向开发者的通知基础设施。一次 API 调用即可发送到应用内、邮件、短信、Slack 和推送等多个渠道。免费套餐包含每月 10,000 条消息。
  * [Novu.co](https://novu.co) - 面向开发者的开源通知基础设施。通过简单的组件和 API 在一处管理所有通信渠道：邮件、短信、直达消息、应用内和推送。免费套餐包含每月 30,000 条通知，保留期 90 天。
  * [Pingram.io](https://www.pingram.io/) - 5 分钟接入通信基础设施。免费套餐包含：100 条短信和通话、3000 封邮件、推送、Slack、MS Teams、WhatsApp 等。
  * [Pocket Alert](https://pocketalert.app) - 向你的 iOS 和 Android 设备发送推送通知。通过 API 或 Webhooks 轻松集成，完全掌控你的提醒。免费套餐：每天向 1 台设备和 1 个应用发送 50 条消息。
  * [pubnub.com](https://www.pubnub.com/) - 支持 Swift、Kotlin 和 React 的消息服务，每月 100 万次事务。每次事务可包含多条消息。
  * [pusher.com](https://pusher.com/) - 实时消息服务。免费支持最多 100 个并发连接和每天 200,000 条消息
  * [scaledrone.com](https://www.scaledrone.com/) - 实时消息服务。免费支持最多 20 个并发连接和每天 100,000 个事件
  * [SMSGate](https://sms-gate.app) - 面向 Android™ 的 SMS 网关，可通过云端路由经你的设备收发短信。完全免费的云服务（当日使用量超过 10,000 条消息时会收到建议告知，以保障全体用户的服务质量）。
  * [SuprSend](https://www.suprsend.com/) - SuprSend 是一个通知基础设施，以 API 优先的方式简化产品通知。通过单个通知 API 在多个渠道创建和投递事务性、定时和互动类通知。免费套餐每月可获得 10,000 条通知，涵盖摘要、批量、多渠道、偏好设置、租户、广播等不同工作流节点。
  * [synadia.com](https://synadia.com/ngs) - [NATS.io](https://nats.io) 即服务。覆盖全球以及 AWS、GCP 和 Azure。永久免费：消息大小 4k、50 个活跃连接、每月 5GB 数据。
  * [webpushr](https://www.webpushr.com/) - Web 推送通知——免费支持最多 10k 订阅者，推送通知数量不限，并支持浏览器内消息
  * [vask](https://vask.dev) - 实时消息服务，兼容 Pusher。开发套餐仅限本地开发使用，免费提供 100 个并发连接、每月 1,000,000 次广播、不限客户端事件、消息大小 32kb。

**[⬆️ 返回顶部](#目录)**

## 日志管理（Log Management）

  * [bugfender.com](https://bugfender.com/) - 免费支持每天最多 100k 行日志，保留期 24 小时
  * [log.dog](https://log.dog/) - LogDog 是一个远程调试/日志 SDK（iOS 和 Android），带 Web 界面。实时捕获所有日志、请求和事件，并支持拦截。每月免费使用最多 100MB 日志
  * [logflare.app](https://logflare.app/) - 免费支持每应用每月最多 12,960,000 个条目，保留期 3 天
  * [logtail.com](https://logtail.com/) - 基于 ClickHouse、兼容 SQL 的日志管理。每月免费最多 1 GB，保留期三天。
  * [logzab.com](https://logzab.com/) - 审计追踪管理系统。每月免费 1,000 条用户活动日志，保留期 1 个月，最多支持 5 个项目。
  * [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) - 由 Manage Engine 提供支持的日志管理服务。免费套餐提供 50 GB 存储，存储保留期 15 天，搜索保留期 7 天。
  * [openobserve.ai](https://openobserve.ai/) - 每月免费摄入 200 GB，保留期 15 天
  * [Smart Grow Logs](https://logs.smart-grow.app/) - 集中式日志管理平台，提供端到端加密、实时告警和多平台 SDK。免费套餐包含每天最多 3.000 条日志。

**[⬆️ 返回顶部](#目录)**

## 翻译管理（Translation Management）

  * [AutoLocalise.com](https://www.autolocalise.com/) - 无需管理翻译文件即可即时完成本地化。每月免费最多 10,000 个字符，语言数量不限。
  * [crowdin.com](https://crowdin.com/) - 为开源项目提供不限数量的项目、字符串和协作者
  * [Free PO editor](https://pofile.net/free-po-editor) - 对所有人免费
  * [Lingo.dev](https://lingo.dev) - 开源的 AI 驱动 Web 与移动本地化 CLI。可使用你自己的 LLM，或通过 Lingo.dev 托管的本地化引擎每月使用 10,000 个免费单词。
  * [lingohub.com](https://lingohub.com/) - 最多 3 名用户免费，开源项目永久免费
  * [Localhero.ai](https://localhero.ai) - 在每个拉取请求上自动生成符合品牌风格的翻译，带术语表和翻译记忆库。免费支持 1 个项目、每月 250 个翻译积分（约 4,000 个单词）。
  * [localazy.com](https://localazy.com) - 免费支持 1000 条源语言字符串，语言不限、贡献者不限，并提供创业公司和开源优惠
  * [Localit](https://localit.io) - 快速、对开发者友好的本地化平台，提供无缝且免费的 GitHub/GitLab 集成、AI 辅助翻译和人工翻译，以及慷慨的免费套餐（含 2 名用户、500 个键、不限数量的项目）。
  * [localizely.com](https://localizely.com/) - 开源项目免费
  * [Loco](https://localise.biz/) - 免费支持最多 2000 条翻译，译员数量不限，每项目十种语言、1000 个可翻译资源
  * [POEditor](https://poeditor.com/) - 免费支持最多 1000 条字符串
  * [SimpleLocalize](https://simplelocalize.io/) - 免费支持最多 100 个翻译键，字符串不限、语言不限，并提供创业公司优惠
  * [Texterify](https://texterify.com/) - 单个用户免费
  * [Tolgee](https://tolgee.io) - 免费 SaaS 服务，翻译数量有限；自托管版本永久免费
  * [transifex.com](https://www.transifex.com/) - 开源项目免费

**[⬆️ 返回顶部](#目录)**

## 监控（Monitoring）

  * [Pingzo](https://www.pingzoapp.com) - 免费套餐提供 1 个可用性/API 监控，检查间隔 15 分钟，并提供即时邮件告警。
  * [Accesserty Pulse](https://accesserty.com/en/pulse) - Accesserty Pulse 监控线上网站的交互信号和可检测的无障碍风险。提供面向所有人的免费套餐，以及 14 天 Pro 试用。
  * [AlertKick](https://www.alertkick.com) - 一款产品集成服务器安全（面向 Linux 的 eBPF 代理）、可用性监控、值班告警/状态页。免费套餐包含 10 个可用性监控和心跳检测，检查间隔 5 分钟，保留期 7 天。
  * [assertible.com](https://assertible.com) - 自动化 API 测试与监控。面向团队和个人的免费套餐。
  * [Better Stack](https://betterstack.com/better-uptime) - 一款产品集成可用性监控、事件管理、值班排班/告警和状态页。免费套餐包含十个监控，检查频率 3 分钟，并提供状态页。
  * [bleemeo.com](https://bleemeo.com) - 免费支持 3 台服务器、5 个可用性监控，用户、仪表板和告警规则均不限。
  * [checklyhq.com](https://checklyhq.com) - 面向开发者的开源 E2E/合成监控和深度 API 监控。免费套餐含 1 名用户，以及 10k 次 API 与网络检查 / 1.5k 次浏览器检查运行。
  * [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询某个 URL 或网站的 Core Web Vitals 历史记录。
  * [cronalive.com](https://cronalive.com) - cron 任务心跳监控，以及 HTTP 可用性和 TLS 到期检查，并提供可从调度器创建检查的 Laravel 包。免费套餐含 10 个检查、HTTP 间隔从 5 分钟起、30 天历史记录、每月 50k 次 ping。
  * [cronitor.io](https://cronitor.io/) - 面向 cron 任务、网站、API 等的性能洞察和可用性监控。提供含五个监控的免费套餐。
  * [datadoghq.com](https://www.datadoghq.com/) - 免费支持最多 5 个节点
  * [DeadBro](https://www.deadbro.com) - Rails APM，按请求计费：实时链路追踪、慢 SQL、N+1 检测和错误跟踪。永久免费支持每月 50k 次请求、保留期 7 天、1 个应用、1 个可用性检查和邮件告警。无需信用卡。
  * [deadmanssnitch.com](https://deadmanssnitch.com/) - cron 任务监控。免费一个 snitch（监控器），推荐他人注册可获得更多
  * [downtimemonkey.com](https://downtimemonkey.com/) - 60 个可用性监控，间隔 5 分钟。支持邮件、Slack 告警。
  * [drumbeats.io](https://drumbeats.io/) - cron、心跳和可用性监控，带事件管理和状态页。免费支持最多 50 个监控，间隔 1 分钟，团队席位不限。
  * [economize.cloud](https://economize.cloud) - Economize 通过梳理云资源来优化并报告云基础设施成本，让成本一目了然。每月在 Google Cloud Platform 消费不超过 $5,000 的用户可免费使用。
  * [fivenines.io](https://fivenines.io/) - Linux 服务器监控，带实时仪表板和告警——永久免费支持最多 5 台受监控服务器，间隔 60 秒。无需信用卡。
  * [FlareWarden](https://flarewarden.com) - 可用性、内容、依赖项和 SSL 监控，支持多区域验证和状态页。免费套餐包含 15 个监控、5 分钟检查和 90 天历史记录。
  * [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud 是一个可组合的可观测性平台，将指标和日志与 Grafana 集成。免费版：3 名用户、十个仪表板、100 条告警，指标存储于 Prometheus 和 Graphite（10,000 个序列，保留期 14 天），日志存储于 Loki（50 GB 日志，保留期 14 天）
  * [healthchecks.io](https://healthchecks.io) - 监控你的 cron 任务和后台任务。免费支持最多 20 个检查。
  * [incidenthub.cloud](https://incidenthub.cloud/) - 云和 SaaS 状态页聚合器——20 个监控和 2 个通知渠道（Slack 和 Discord）永久免费。
  * [inspector.dev](https://www.inspector.dev) - 不到一分钟即可搭建完整的实时监控仪表板，提供永久免费套餐。
  * [instatus.com](https://instatus.com) - 10 秒获得精美的状态页。永久免费，订阅者和团队数量不限。
  * [isitdownstatus.com](https://isitdownstatus.com) – 免费的公共 JSON API，返回 500+ 热门服务（GitHub、Stripe、AWS 等）的实时状态。无需认证，支持 CORS。
  * [LastPing](https://lastping.dev) - 面向 AI 代理、cron 任务和 CI 的死亡开关。个人使用免费，监控和通知目标不限。让 AI 代理为包括自身在内的一切构建监控。
  * [linkok.com](https://linkok.com) - 在线死链检查工具，100 页以内的小型网站免费，开源项目完全免费。
  * [loader.io](https://loader.io/) - 免费负载测试工具，有一定限制
  * [MarionetteOps.com](https://www.marionetteops.com/) - 服务器监控、公共状态页和服务可用性监控。
  * [Middleware.io](https://middleware.io/) -  Middleware 可观测性平台提供对应用和技术栈的完整可见性，让你能够大规模监控和诊断问题。提供面向开发者社区的永久免费套餐，支持监控最多 1M 个日志事件的日志，以及最多 2 台主机的基础设施监控与 APM。
  * [MonitorMonk](https://monitormonk.com) - 极简的可用性监控，带精美的状态页。永久免费套餐为 10 个网站或 API 端点提供 HTTPS、关键字、SSL 和响应时间监控，并提供 2 个仪表板/状态页。
  * [netdata.cloud](https://www.netdata.cloud/) - Netdata 是一个收集实时指标的开源工具。产品仍在成长中，也可以在 GitHub 上找到它！
  * [newrelic.com](https://www.newrelic.com) - New Relic 可观测性平台旨在帮助工程师打造更完美的软件。从单体应用到无服务器，你可以为所有内容插桩，然后分析、排查并优化整个软件栈。免费套餐提供每月 100GB 免费数据摄入、一个完全访问权限用户，以及不限数量的免费主要用户。
  * [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot 为网站和 API 提供可用性监控，为 cron 任务和计划任务提供监控，还提供状态页。前五个检查（间隔 3 分钟）免费。免费套餐通过 Slack、Discord 和邮件发送告警。
  * [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) - 检测网站是否在中国被防火长城（GFW）屏蔽。通过对比中国境内服务器与美国服务器检测到的 DNS 结果和 ASN 信息，识别 DNS 污染。
  * [pagecrawl.io](https://pagecrawl.io/) -  监控网站变化，免费支持最多 6 个监控，每天检查。
  * [pagertree.com](https://pagertree.com/) - 简单的告警和值班管理界面。免费支持最多 5 名用户。
  * [phare.io](https://phare.io/) - 可用性监控，免费支持最多 100,000 个事件，项目和状态页不限。
  * [pingbreak.com](https://pingbreak.com/) - 现代化的可用性监控服务。检查不限数量的 URL，并通过 Discord、Slack 或邮件接收宕机通知。
  * [Pingmeter.com](https://pingmeter.com/) - 5 个可用性监控，间隔 10 分钟。监控 SSH、HTTP、HTTPS 和任何自定义 TCP 端口。
  * [pingpong.one](https://pingpong.one/) - 高级状态页平台，带监控功能。免费套餐包含一个带 SSL 子域名的可定制公共状态页。开源项目和非营利组织可免费使用 Pro 套餐。
  * [Prismix](https://prismix.dev) - 免费 REST API（GET /api/v1/statuses），返回 75+ AI 服务（包括 OpenAI、Anthropic、Gemini、Mistral 等）的实时运行状态。无需认证。[提供免费套餐，Pro 为 $10/月]
  * [Pulsetic](https://pulsetic.com) - 10 个监控、6 个月历史可用性/日志、不限数量的状态页，并包含自定义域名！永久免费提供不限数量的邮件告警。无需信用卡。
  * [robusta.dev](https://home.robusta.dev/) - 基于 Prometheus 的强大 Kubernetes 监控。可使用你自己的 Prometheus，或安装一体化套件。免费套餐包含最多 20 个 Kubernetes 节点。通过 Slack、Microsoft Teams、Discord 等发送告警。与 PagerDuty、OpsGenie、VictorOps、DataDog 等众多工具集成。
  * [Runframe](https://runframe.io/) - 值班告警、事件管理和公共/私有状态页。免费套餐包含最多 5 名用户、1 个团队、1 个值班排班、基础状态页、事件生命周期，以及 Slack 原生事件响应。
  * [Servervana](https://servervana.com) - 高级可用性监控，支持大型项目和团队。提供 HTTP 监控、基于浏览器的监控、DNS 监控、域名监控、状态页等。免费套餐包含 10 个 HTTP 监控、1 个 DNS 监控和一个状态页。
  * [Simple Observability](https://simpleobservability.com) - 统一平台中的强大服务器监控，整合指标和日志，无配置复杂度。一台服务器免费。
  * [sitesure.net](https://sitesure.net) - 网站和 cron 监控——2 个监控免费
  * [skylight.io](https://www.skylight.io/) - 前 100,000 次请求免费（仅限 Rails）
  * [statuscake.com](https://www.statuscake.com/) - 网站监控，不限数量的测试免费，有一定限制
  * [statusgator.com](https://statusgator.com/) - 状态页监控，3 个监控免费
  * [supaguard.app](https://supaguard.app/) - 来自 20+ 全球区域的合成监控。免费套餐包含每月 1,000 次浏览器检查，带 AI 驱动的自愈和自动化测试生成。
  * [superlog.sh](https://superlog.sh/) - 开源 OpenTelemetry 可观测性（链路、日志和指标），带 AI 代理事件调查。免费套餐包含每月 1M 个 span、5M 条日志和 10M 个指标点，保留期 30 天，无需信用卡。完全开源并可自托管。
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) - 服务器监控、可用性监控、DNS 和域名监控。免费监控 10 台服务器、10 项可用性和 10 个域名。
  * [syagent.com](https://syagent.com/) - 非商业用途的免费服务器监控服务，提供告警和指标。
  * [UptimeObserver.com](https://uptimeobserver.com) - 获得 20 个间隔 5 分钟的可用性监控和一个可定制状态页——即使商业用途亦可。通过邮件和 Telegram 接收不限数量的实时通知。上手无需信用卡。
  * [uptimetoolbox.com](https://uptimetoolbox.com/) - 免费监控五个网站，间隔 3 分钟，提供公共状态页。
  * [Wachete](https://www.wachete.com) - 监控五个页面，每 24 小时检查一次。
  * [Watchgoose](https://watchgoose.com) - 面向计划任务、备份和后台作业的 cron 任务与心跳监控及状态页，提供 MCP 服务器。免费套餐：10 个检查、200 条 ping 日志条目，支持邮件/聊天/Webhook 告警，无需信用卡。符合条件的开源项目可参加开源支持计划。
  * [Xitoring.com](https://xitoring.com/) - 可用性监控：20 个免费；Linux 和 Windows Server 监控：5 个免费；状态页：1 个免费——还有移动应用、多个通知渠道等！
  * [UptimeRobot](https://uptimerobot.com/) - 面向个人爱好项目的免费可用性监控。包含 50 个监控，检查间隔 5 分钟，支持 HTTP、ping、端口和关键字监控。

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理（Crash and Exception Handling）

  * [Axiom](https://axiom.co/) - 存储最多 0.5 TB 日志，保留期 30 天。包含与 Vercel 等平台的集成，以及高级数据查询功能，带邮件/Discord 通知器。
  * [Bugsink](https://www.bugsink.com/) - 兼容 Sentry SDK 的错误跟踪。免费支持每月最多 5,000 个错误；自托管则使用不限。
  * [bugsnag.com](https://www.bugsnag.com/) - 初始试用期后，每月免费支持最多 2,000 个错误
  * [CatchJS.com](https://catchjs.com/) - JavaScript 错误跟踪，带截图和点击轨迹。开源项目免费。
  * [elmah.io](https://elmah.io/) - 面向 Web 开发者的错误日志和可用性监控。为开源项目提供免费 Small Business 订阅。
  * [Embrace](https://embrace.io/) - 移动应用监控。小型团队免费，每年最多 100 万个用户会话。
  * [exceptionless](https://exceptionless.com) - 实时错误、功能、日志报告等。免费支持每月 3k 个事件/1 名用户。开源且易于自托管，可不限量使用。
  * [GlitchTip](https://glitchtip.com/) - 简单、开源的错误跟踪。兼容开源 Sentry SDK。每月免费 1000 个事件；也可自托管，没有限制
  * [honeybadger.io](https://www.honeybadger.io) - 异常、可用性和 cron 监控。小型团队和开源项目免费（每月 12,000 个错误）。
  * [Jam](https://jam.dev) - 一键生成对开发者友好的缺陷报告。免费套餐可创建不限数量的 jam。
  * [memfault.com](https://memfault.com) - 云端设备可观测性和调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp) 和 [Laird](https://app.memfault.com/register-laird) 设备可免费使用 100 台设备。
  * [rollbar.com](https://rollbar.com/) - 异常和错误监控，免费套餐每月 5,000 个错误、用户不限、保留期 30 天
  * [Semaphr](https://semaphr.com) - 面向移动应用的免费一体化终止开关（kill switch）。
  * [sentry.io](https://sentry.io/) - Sentry 实时跟踪应用异常，并提供一个小型免费套餐。每月 5k 个错误/1 名用户免费；自托管则使用不受限
  * [Whitespace](https://whitespace.dev) - 直接在浏览器中一键生成缺陷报告。免费套餐供个人使用，录制数量不限。

**[⬆️ 返回顶部](#目录)**

## 搜索（Search）

  * [algolia.com](https://www.algolia.com/) - 托管式搜索解决方案，提供容错、相关性和 UI 库，轻松打造搜索体验。免费的 “Build” 套餐包含 1M 个文档和每月 10K 次搜索。还免费提供[开发者文档搜索](https://docsearch.algolia.com/)。
  * [bonsai.io](https://bonsai.io/) - 免费 1 GB 内存和 1 GB 存储
  * [CommandBar](https://www.commandbar.com/) - 统一搜索栏即服务，基于 Web 的 UI 小部件/插件，让用户可在你的产品内搜索内容、导航、功能等，提升可发现性。免费支持最多 1,000 个月活用户，命令数量不限。
  * [searchly.com](https://www.searchly.com/) - 免费 2 个索引和 20 MB 存储

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展（Education and Career Development）

  * [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - 提供与认证对齐的免费课程，涵盖网络安全、网络、Python 等主题。
  * [CloudCertPrep](https://cloudcertprep.io) - 免费、开源的 AWS 认证模拟考试，为 CLF-C02 提供 1,050+ 道题目。特性包括计时模拟考试、领域专项练习、间隔重复和进度跟踪。
  * [CodeTrain](https://codetrain.ai) - AI 编程导师，基于你自己的代码库教学，绝不替你写代码。免费套餐：每月 10 节浏览器内课程，Python/JS 在客户端运行，无需银行卡。
  * [DeepLearning.AI Short Courses](https://www.deeplearning.ai/short-courses/) - 行业顶尖专家提供的免费短课程，在一小时内动手体验最新的生成式 AI 工具和技术。
  * [DevNet Academy](https://devnet-academy.com/) - 面向 Cisco DevNet Expert / CCIE Automation 认证的免费自定进度培训。涵盖 Python Click 和 Flask-RESTx。
  * [Django-tutorial.dev](https://django-tutorial.dev) - 免费在线指南，帮助学习者将 Django 作为第一个框架学习；并为用户撰写的文章免费提供 dofollow 反向链接。
  * [edX](https://www.edx.org/) - 可学习来自 250 所顶尖院校（含 Harvard 和 MIT）的 4,000+ 门免费在线课程，专注于计算机科学、工程和数据科学。
  * [Exercism](https://exercism.org) - 免费、开源的编程教育，覆盖 75+ 种编程语言，提供真人导师指导。非营利组织。
  * [Free Professional Resume Templates & Editor](https://www.overleaf.com/latex/templates/tagged/cv) - 免费平台，提供大量资深职场人简历模板，可完整克隆、编辑并下载，针对 ATS 优化。
  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web 开发等免费课程和认证。
  * [Full Stack Open](https://fullstackopen.com/en/) - 免费的大学级现代 Web 开发课程，涵盖 React、Node.js、GraphQL、TypeScript 等。完全在线，自定进度。
  * [Interactive CV](https://interactive-cv.com) - AI 驱动的简历构建器，支持实时编辑和 ATS 优化。免费套餐包含自动将简历转换为高级模板（Harvard、Europass）、PDF 导出、带不限职位发布洞察的求职追踪器，以及具备聊天/语音功能的简历分享。
  * [Khan Academy](https://www.khanacademy.org/computing/computer-programming) - 免费在线指南，学习基础和高级 HTML/CSS、JavaScript 和 SQL。
  * [LabEx](https://labex.io) - 通过交互式实验和真实项目培养 Linux、DevOps、网络安全、编程、数据科学等技能。
  * [MIT OpenCourseWare](https://ocw.mit.edu/) - MIT OpenCourseWare 是 2,500+ 门 MIT 课程资料的在线发布平台，与全球学习者和教育者免费分享知识。YouTube 频道可在 [@mitocw](https://www.youtube.com/@mitocw/featured) 找到
  * [Reactive Resume](https://rxresu.me) - 免费、开源的简历构建器，提供数十种模板。支持导出 PDF、DOCX，还可生成公开可分享的简历链接（可选开启）。
  * [Roadmap.sh](https://roadmap.sh) - 免费学习路线图，覆盖从 Blockchain 到 UX 设计的开发方方面面。
  * [The Odin Project](https://www.theodinproject.com/) - 免费、开源平台，课程专注于 Web 开发的 JavaScript 和 Ruby。
  * [W3Schools](https://www.w3schools.com/) - 提供 HTML、CSS、JavaScript 等 Web 开发技术的免费教程。
  * [WebTerm Learn](https://learn.webterm.app) - 在浏览器模拟终端中学习 Linux 终端、Git 和 Vim。全部 129 节课程免费；每门课程的第一节无需账户。

**[⬆️ 返回顶部](#目录)**

## 邮件服务（Email）

  * [Unitpost](https://www.unitpost.com/) - AI 优先的事务性与营销邮件服务。免费套餐：每月 5,000 封邮件、每天 200 封、10,000 个联系人、5 个域名。无需信用卡。提供 SDK、MCP 和 REST API。
  * [10minutemail](https://10minutemail.com) - 免费的临时邮箱，用于测试。
  * [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费 1000 封邮件，免费套餐中域名、团队成员、webhook 和邮件路由数量不限。
  * [AnonAddy](https://anonaddy.com) - 开源的匿名邮件转发，免费创建不限数量的邮件别名
  * [anon.li Alias](https://anon.li/alias) - 开源、匿名的邮件别名/转发方案，支持 PGP 加密和回复功能；免费套餐含 10 个随机别名和 1 个自定义别名，提供开发者 API 和 CLI。
  * [Antideo](https://www.antideo.com) - 免费套餐每小时可进行 10 次 API 请求，用于邮件验证、IP 和电话号码校验。无需信用卡。
  * [Anypost](https://anypost.com) - 事务性和群发邮件 API。每月免费 3,000 封邮件，之后低至每 1,000 封 8¢
  * [Atomic Mail](https://atomicmail.ai) - 为 AI 代理打造的邮件服务，完全免费。支持以编程方式创建收件箱、自定义域名，并基于开放的 JMAP 标准（RFC 8620/8621）完整收发邮件；提供托管 MCP 服务器。这是真实邮箱服务，而非一次性/临时邮箱。
  * [Brevo](https://www.brevo.com/) - 每月 9,000 封邮件、每天 300 封免费
  * [Bump](https://bump.email/) - 免费 10 个 Bump 邮箱地址，一个自定义域名
  * [Burnermail](https://burnermail.io/) - 免费 5 个 Burner 邮箱地址、1 个邮箱、7 天邮箱历史记录
  * [Buttondown](https://buttondown.email/) - 新闻通讯服务。最多 100 名订阅者免费
  * [Canny Pigeons](https://cannypigeons.com/) - DMARC 监控平台，提供 DNS 漂移告警、IP 威胁情报，用户数量不限。第一个域名免费——无需信用卡。
  * [Conduit](https://conduit.email/) - 将收到的邮件转换为 webhook，从而通过邮件触发你的 API。该服务完全免费。
  * [Contact.do](https://contact.do/) - 一个链接里的联系表单（联系表单版的 bitly）
  * [debugmail.io](https://debugmail.io/) - 面向开发者的易用测试邮件服务器
  * [dkimvalidator.com](https://dkimvalidator.com/) - 测试邮件的 DNS/SPF/DKIM/DMARC 设置是否正确，roundsphere.com 提供的免费服务
  * [DNSExit](https://dnsexit.com/) - 你的域名下最多免费提供 2 个邮箱地址，含 100MB 存储空间。支持 IMAP、POP3、SMTP、SPF/DKIM。
  * [EmailGuard](https://emailguard.lazrek.com/) - 通过简单的 API 屏蔽一次性邮箱、捕获拼写错误并验证 MX 记录。每月 100 次免费请求。
  * [EmailJS](https://www.emailjs.com/) - 这不是完整的邮件服务器，而只是一个邮件客户端，可让你直接从客户端发送邮件而不暴露凭据；免费套餐含每月 200 次请求、2 个邮件模板、请求大小上限 50Kb、有限的联系人历史记录。
  * [EmailLabs.io](https://emaillabs.io/en) - 每月免费发送最多 9,000 封邮件，每天最多 300 封。
  * [EmailQo Email Infrastructure Grader](https://emailqo.com/email-grader) - 免费的邮件基础设施评分工具，检查 SPF、DKIM、DMARC 和邮件服务器配置。为任意域名打出满分 100 的分数。无需注册。
  * [EmailOctopus](https://emailoctopus.com) - 最多 2,500 名订阅者和每月 10,000 封邮件免费
  * [Emailvalidation.io](https://emailvalidation.io) - 每月 100 次免费邮件验证
  * [Emitlo](https://emitlo.com) - 每月免费 12,000 封邮件，提供邮件 API 和 SMTP，支持 SPF/DKIM/DMARC，无需信用卡。
  * [EtherealMail](https://ethereal.email) - Ethereal 是一个模拟 SMTP 服务，主要面向 Nodemailer 和 EmailEngine 用户（但不限于此）。这是一项完全免费的反事务性邮件服务，消息永远不会真正投递。
  * [forwardemail.net](https://forwardemail.net) - 面向自定义域名的免费邮件转发。可使用你的域名创建并转发不限数量的邮箱地址（**注意**：若使用 .casa、.cf、.click、.email、.fit、.ga、.gdn、.gq、.lat、.loan、.london、.men、.ml、.pl、.rest、.ru、.tk、.top、.work 等 TLD，由于垃圾邮件问题必须付费）
  * [Imitate Email](https://imitate.email) - 用于在 build/qa 和 ci/cd 环节测试邮件功能的沙箱邮件服务器。免费账户永久每天 15 封邮件。
  * [ImprovMX](https://improvmx.com) - 免费邮件转发。
  * [Inboxes App](https://inboxesapp.com) - 每天创建最多 3 个临时邮箱，用完后可通过便捷的 Chrome 扩展删除。非常适合测试注册流程。
  * [inboxkitten.com](https://inboxkitten.com/) - 免费的临时/一次性邮箱，邮件最长 3 天后自动删除。开源并可自托管。
  * [Is It Disposable](https://isitdisposable.com/) - 检测并屏蔽一次性邮箱地址。免费套餐每月 250 次查询，无需银行卡。
  * [KaiMail](https://kaimail.net) - 面向自定义域名的邮件转发，带 ARC/DKIM 签名。免费套餐包含 1 个域名、1 个邮箱、每月 300 封邮件、消息大小上限 1MB。还提供邮件接收 webhook。为开源项目提供专属套餐。
  * [mail-tester.com](https://www.mail-tester.com) - 测试邮件的 DNS/SPF/DKIM/DMARC 设置是否正确，每月 20 次免费。
  * [Maileroo](https://maileroo.com) - 面向开发者的 SMTP 中继和邮件 API。每月 5,000 封邮件，域名不限，含免费邮件验证、黑名单监控、邮件测试等。
  * [mailcatcher.me](https://mailcatcher.me/) - 拦截邮件并通过 Web 界面展示。
  * [mailchannels.com](https://www.mailchannels.com) - 提供 REST API 和 SMTP 集成的邮件 API，每月免费最多 3,000 封邮件。
  * [Mailcheck.ai](https://www.mailcheck.ai/) - 防止用户使用临时邮箱地址注册，120 次请求/小时（约每月 86,400 次）
  * [Maildroppa](https://maildroppa.com) - 免费支持最多 100 名订阅者，邮件数量和自动化流程不限。
  * [MailerLite.com](https://www.mailerlite.com) - 每月 1,000 名订阅者、12,000 封邮件免费
  * [MailerSend.com](https://www.mailersend.com) - 邮件 API、SMTP，事务性邮件每月免费 500 封，每天 100 次 API 请求
  * [mailinator.com](https://www.mailinator.com/) - 免费、公共的邮件系统，你可以使用任意想要的收件箱
  * [Mailjet](https://www.mailjet.com/) - 每月 6,000 封邮件免费（每天发送上限 200 封）
  * [mailsac.com](https://mailsac.com) - 用于临时邮件测试的免费 API，免费公共邮件托管、外发捕获、邮件转发至 slack/websocket/webhook（每月 API 上限 1,500 次）
  * [Mailtrap.io](https://mailtrap.io/) - 邮件 API 和 SMTP，每月免费 4,000 封邮件，每天限 150 封。邮件营销含 500 个联系人、每月 1,500 封邮件。邮件沙箱含每月 50 封测试邮件、1 个沙箱、最多存储 10 封邮件。
  * [Mutant Mail](https://www.mutantmail.com/) - 免费 10 个邮箱 ID、1 个域名、1 个邮箱。所有邮箱 ID 共用单个邮箱。
  * [OneSignal](https://onesignal.com/) - 每月 10,000 封邮件，无需信用卡。
  * [Orbisearch](https://orbisearch.com) - 免费批量邮件验证器，每天 100 次验证，无需注册。
  * [Parsio.io](https://parsio.io) - 免费邮件解析器（转发邮件、提取数据、发送到你的服务器）
  * [Plunk](https://useplunk.com) - 每月免费 3K 封邮件
  * [Postmark](https://postmarkapp.com/) - 每月 100 封邮件免费，DMARC 每周摘要不限数量。
  * [Proton Mail](https://proton.me/mail) -  免费的安全邮箱账户服务提供商，内置端到端加密。免费 1GB 存储。
  * [Reloop](https://reloop.sh) - 面向开发者的事务性邮件 API 和 SMTP。免费套餐：每月 3,000 封邮件、每天 200 封、一个自定义域名和一个代理收件箱。
  * [Resend](https://resend.com) - 面向开发者的事务性邮件 API。每月 3,000 封、每天 100 封免费，含一个自定义域名。
  * [SendBridge Mail Tester](https://sendbridge.com/mail-tester) — 免费的邮件送达率测试，无需注册。生成一个唯一的收件箱地址，然后分析 SPF、DKIM、DMARC、Rspamd 垃圾邮件评分、23+ 个 RBL 黑名单、反向 DNS 和内容质量。测试次数不限，数秒出结果，报告页面可分享。
  * [Sender](https://www.sender.net) - 每月最多 15,000 封邮件，最多 2,500 名订阅者
  * [Sendpulse](https://sendpulse.com) - 每月 500 名订阅者、15,000 封邮件免费
  * [SendStreak](https://www.sendstreak.com/) - 邮件框架即服务，为你自己的 SMTP 服务器（如 AWS、Maileroo、Gmail）增加模板、自动化、历史记录等。免费支持每天最多 100 封邮件，无时间限制。
  * [SimpleLogin](https://simplelogin.io/) - 开源、可自托管的邮件别名/转发方案。免费 10 个别名，带宽不限，回复/发送不限。教育工作者（学生、研究人员等）免费。
  * [SMTPfast](https://smtpfa.st/) - SMTPfast 是面向开发者的简单邮件 API，免费套餐包含每月 3,000 封邮件、1 个域名和 1,000 个联系人，无需信用卡。
  * [Substack](https://substack.com) - 不限数量的免费新闻通讯服务。当你开始收费时才需付费。
  * [Suped](https://www.suped.com/) - 用户友好的 DMARC 监控平台。免费套餐覆盖一个域名，每月最多 1,000 封邮件。
  * [Sweego](https://www.sweego.io/) - 面向开发者的欧洲事务性邮件 API。每天免费 100 封。
  * [temp-mail.io](https://temp-mail.io) - 免费的一次性临时邮箱服务，可同时使用多个邮箱并支持转发
  * [Temp-Mail.org](https://temp-mail.org/en/) - 临时/一次性邮箱生成工具，使用多种域名。每次页面重新加载时邮箱地址都会刷新。完全免费，其服务不包含任何付费项目。
  * [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证最多 200 封邮件，查看邮箱是否为临时邮箱。
  * [trashmail.com](https://www.trashmail.com) - 免费的一次性邮箱地址，支持转发和地址自动到期
  * [Tuta](https://tuta.com/) - 免费的安全邮箱账户服务提供商，内置端到端加密，无广告、无跟踪。免费 1GB 存储、一个日历（Tuta 也提供[付费套餐](https://tuta.com/pricing)）。Tuta 也有部分[开源](https://github.com/tutao/tutanota)，因此你可以自托管。
  * [Verifalia](https://verifalia.com/email-verification-api) - 实时邮件验证 API，带收件箱确认和一次性邮箱检测器；每天免费 25 次邮件验证。
  * [verimail.io](https://verimail.io/) - 批量和 API 邮件验证服务。每月 100 次免费验证
  * [Waitlio](https://waitlio.com/) - 面向产品发布的等候名单管理软件。创建品牌化等候名单页面、收集并验证邮件订阅者、通过标签和分析管理注册。免费套餐包含每月 100 名订阅者、1 个等候名单和 API 访问权限。
  * [Wraps](https://wraps.dev) - 邮件自动化工作流，免费支持 5k 个已跟踪事件，联系人不限。
  * [ZeroSMTP](https://github.com/msgwing/ZeroSMTP) - 基于 msgwing.com 域名的免费 SMTP 中继，每天最多 200 封邮件，无付费套餐。仅能从共享的 @msgwing.com 地址发送（不支持自定义域名）。提供 15 种语言的可直接运行代码示例，以及 Windows Server/Linux/网络打印机设置指南。

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台（Feature Toggles Management Platforms）

  * [Abby](https://www.tryabby.com) - 开源功能开关与 A/B 测试。配置即代码，提供完整类型的 TypeScript SDK。与 Next.js、React 等框架深度集成。免费套餐慷慨，扩展成本低廉。
  * [ConfigCat](https://configcat.com) - ConfigCat 是一款以开发者为中心的功能开关服务，团队人数不限、支持出色、价格合理。免费套餐支持最多 10 个开关、两个环境、1 个产品以及每月 500 万次请求。
  * [Flagsmith](https://flagsmith.com) - 放心发布功能；跨 Web、移动端和服务端应用管理功能开关。可使用其托管 API、部署到你自己的私有云或本地部署。
  * [GrowthBook](https://growthbook.io) - 开源功能开关与 A/B 测试提供商，内置贝叶斯统计分析引擎。最多 3 名用户免费，功能开关和实验数量不限。
  * [Rollgate](https://rollgate.io) - 欧盟托管的功能开关管理，支持定时发布、即时回滚和 A/B 测试。内置 12 个 SDK。免费套餐支持每月最多 500K 次 API 请求、开关数量不限、3 名团队成员，无需信用卡。
  * [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B 测试、分析与应用配置，具备 Git 风格的版本控制以及同步的内存本地开关求值。最多 5 名团队成员免费，功能开关与 A/B 测试数量不限。
  * [Statsig](https://www.statsig.com) - 功能强大的功能管理、A/B 测试、分析等综合平台。其慷慨的免费套餐提供不限席位、开关、实验和动态配置，每月最多支持 100 万个事件。
  * [Toggled.dev](https://www.toggled.dev) - 面向企业、可扩展的多区域功能开关管理平台。免费套餐支持最多 10 个开关、两个环境、请求数量不限。SDK、分析仪表板、发布日历、Slack 通知以及其他所有功能均包含在永久免费套餐中。

**[⬆️ 返回顶部](#目录)**

## 字体（Font）

  * [Befonts](https://befonts.com/) - 提供多款独特字体，可用于个人或商业用途。
  * [Bunny](https://fonts.bunny.net) - 注重隐私的 Google Fonts
  * [dafont](https://www.dafont.com/) - 本网站提供的字体归其作者所有，分别为免费软件、共享软件、演示版本或公有领域。
  * [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face、单位转换器、字体微调器（Font Hinter）和字体提交器。
  * [Font of web](https://fontofweb.com/) - 识别网站上使用的所有字体及其使用方式。
  * [Font Squirrel](https://www.fontsquirrel.com/) - 可用于商业用途的免费软件字体。手工挑选这些字体并以便于使用的格式呈现。
  * [FontGet](https://www.fontget.com/) - 提供多种字体可供下载，并通过标签整齐分类。
  * [fonts.xz.style](https://fonts.xz.style/) - 免费开源服务，通过 CSS 向网站提供字体族。
  * [Fontsensei](https://fontsensei.com/) - 由用户打标签的开源 Google 字体，含 CJK（中文、日文、韩文）字体标签。
  * [Fontshare](https://www.fontshare.com/) - 是一项免费字体服务，汇集了不断增长的专业级字体，个人与商业用途均 100% 免费。
  * [Google Fonts](https://fonts.google.com/) - 许多免费字体可通过下载或链接 Google 的 CDN 轻松快速地安装到网站上。

**[⬆️ 返回顶部](#目录)**

## 表单（Forms）

  * [FabForm](https://fabform.io/) - 面向聪明开发者的表单后端平台。免费套餐每月允许 250 次表单提交。友好的现代化 GUI。可与 Google Sheets、Airtable、Slack、电子邮件等集成。
  * [Feathery](https://feathery.io) - 强大且对开发者友好的表单构建器。可构建注册与登录、用户引导、支付流程、复杂的金融应用等。免费套餐每月最多 250 次提交和 5 个活动表单。
  * [feedback.fish](https://feedback.fish/) - 免费套餐允许收集总共 25 条反馈提交。提供 React 和 Vue 组件，易于集成。
  * [FluidForms](https://fluidforms.ai/) - 具备 AI 驱动逻辑的表单构建器与后端。免费套餐包含每月 100 份回复、不限数量的表单（包括 AI 创建的表单）、webhook 和嵌入功能。
  * [Form.taxi](https://form.taxi/) - HTML 表单提交端点。具备通知、垃圾信息拦截和符合 GDPR 的数据处理。免费套餐适用于基础用途。
  * [Formboost.app](https://formboost.app) - 开发者优先的表单后端，提供简单的 HTTP 端点、每月 500 次免费提交、垃圾信息防护、邮件通知，以及内置的 Slack、Discord 和 Telegram 集成。无需后端。
  * [Formcarry.com](https://formcarry.com) - HTTP POST 表单端点，免费套餐允许每月 100 次提交。
  * [Formester.com](https://formester.com) - 在你的网站上分享和嵌入外观独特的表单——表单创建数量和功能均不受套餐限制。每月最多可免费获得 100 次提交。
  * [Forminit](https://forminit.com/) - 面向开发者的无头表单后端。免费套餐允许每月 100 次表单提交，包含文件上传、服务端字段验证、邮件通知、垃圾信息防护和 Zapier。
  * [FormKeep.com](https://www.formkeep.com/) - 不限数量的表单，每月 50 次提交，提供垃圾信息防护、邮件通知以及可导出 HTML 的拖拽式设计器。其他功能包括自定义字段规则、团队，以及与 Google Sheets、Slack、ActiveCampaign 和 Zapier 的集成。
  * [Form Plume](https://formplume.com) - Form Plume 是面向 HTML 和 JavaScript 表单的表单后端。一个端点即可获得垃圾信息过滤、邮件通知、文件上传、webhook 和清爽的收件箱。每月免费 500 次提交。
  * [formlets.com](https://formlets.com/) - 在线表单，每月不限数量的单页表单、100 次提交、邮件通知。
  * [forms.app](https://forms.app/) - 使用条件逻辑、自动评分计算器和 AI 等强大功能创建在线表单。免费套餐最多可收集 100 份回复，可将表单嵌入网站或通过链接使用。
  * [formspark.io](https://formspark.io/) -  表单转邮件服务，免费套餐允许不限数量的表单、每月 250 次提交，由客户支持团队提供支持。
  * [Formspree.io](https://formspree.io/) - 使用 HTTP POST 请求发送邮件。免费套餐限制为每个表单每月 50 次提交。
  * [Formsubmit.co](https://formsubmit.co/) - 为 HTML 表单提供简单的表单端点。永久免费，无需注册。
  * [Formware.io](https://formware.io/) - 无需编程即可在数秒内创建完全响应式、引人入胜的表单，并免费收集不限数量的回复！
  * [HeroTofu.com](https://herotofu.com/) - 具备机器人检测和加密存档的表单后端。可通过界面将提交转发至邮件、Slack 或 Zapier。使用你自己的前端，无需服务端代码。免费套餐提供不限数量的表单和每月 100 次提交。
  * [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建器。免费套餐允许创建不限数量的表单并收集不限数量的提交。附带预制模板、反垃圾信息和 100MB 文件存储。
  * [Jotform.com](https://jotform.com/) - 免费创建在线表单、收集提交、接收付款、自动化工作流，并通过内置电子签名签署文档。免费套餐包含 5 个表单、每月 100 次提交、10 份电子签名文档、10 次付款提交等。
  * [Kwes.io](https://kwes.io/) - 功能丰富的表单端点。与静态网站配合极佳。免费套餐包含最多 1 个网站、每月最多 50 次提交。
  * [Makeform](https://www.makeform.ai/) - 基于对话的表单构建器。免费的表单构建器，表单和提交数量不限。99% 的功能免费，包括添加 Logo、条件逻辑、文件上传、付款、集成和 webhook。Pro 套餐（$19/月）支持去除 Makeform 品牌标识、自定义域名和团队功能。Business 套餐（$59/月）支持 RBAC、邮箱验证和单点登录（SSO）。
  * [Pageclip](https://pageclip.co/) - 免费套餐允许 1 个站点、1 个表单和每月 1,000 次提交。
  * [SimplePDF.eu](https://simplepdf.eu/embed) - 在你的网站上嵌入 PDF 编辑器，将任何 PDF 变为可填写表单。免费套餐允许不限数量的 PDF，每个 PDF 3 次提交。
  * [smartforms.dev](https://smartforms.dev/) - 强大且易用的网站表单后端，永久免费套餐允许每月 50 次提交、250MB 文件存储、Zapier 集成、CSV/JSON 导出、自定义重定向、自定义响应页面、Telegram 和 Slack 机器人、单一邮件通知。
  * [staticforms.xyz](https://www.staticforms.xyz/) - 免费轻松集成 HTML 表单，无需任何服务端代码。用户提交表单后，包含表单内容的邮件将发送到你的注册地址。
  * [Survicate](https://survicate.com/) - 用一款工具从所有来源收集反馈并发送跟进问卷。利用 AI 自动分析反馈并提取洞察。免费提供邮件、网站、产品内或移动问卷、AI 问卷创建器，以及每月 25 份回复。
  * [Tally.so](https://tally.so/) - 99% 的功能免费。免费套餐可享受：不限数量的表单、不限数量的提交、邮件通知、表单逻辑、收款、文件上传、自定义感谢页等。
  * [Typeform.com](https://www.typeform.com/) - 在网站中嵌入设计精美的表单。免费套餐每个表单仅限 10 个字段，每月 100 份回复。
  * [Vidhook](https://vidhook.io/) - 用回复率极高的精美问卷收集反馈。免费套餐包含 1 个活动问卷、每个问卷 25 份回复和可自定义模板。
  * [WaiverStevie.com](https://waiverstevie.com) - 带 REST API 的电子签名平台。可通过 webhook 接收通知。免费套餐会在已签署文档上加水印，但允许不限数量的信封和签名。
  * [Web3Forms](https://web3forms.com) - 面向静态网站和 JAMStack 网站的联系表单，无需编写后端代码。免费套餐允许不限数量的表单、不限数量的域名和每月 250 次提交。
  * [Wufoo](https://www.wufoo.com/) - 可在网站上使用的快捷表单。免费套餐每月限制为 100 次提交。
  * [FormNX](https://FormNX.com/) - 免费创建不限数量的表单并获得不限数量的提交。使用专业制作的 1000+ 表单模板或从零创建表单。可获得邮件通知、表单逻辑、收款、文件上传、自定义感谢页等功能。

**[⬆️ 返回顶部](#目录)**

## 生成式 AI（Generative AI）

  * [Arize AX](https://arize.com) - AI 工程平台，内置 Alyx 智能体，帮助 AI 工程师/产品经理评估和观测 AI 应用与智能体。免费产品包含每月 25k 个 span 和 1gb 的数据导入量。
  * [Audio Enhancer](https://voice-clone.org/tools/audio-enhancer) - AI 驱动的音频增强 SaaS，可去除噪音和回声，同时保持自然的人声清晰度。完全免费：不限次数的一键增强，无需登录，支持 MP3/WAV/FLAC
  * [Braintrust](https://www.braintrustdata.com/) - 面向 Gen AI 的评估、提示词试验场和数据管理。免费套餐每周提供最多 1,000 行私有评估数据。
  * [Clair](https://askclair.ai/) - 临床 AI 参考工具。学生可免费使用专业工具套件，包括 Open Search、Clinical Summary、Med Review、Drug Interactions、ICD-10 Codes 和 Stewardship。此外还提供专业套件的免费试用。
  * [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产生命周期中评估、测试并交付 LLM 应用。[#opensource](https://github.com/comet-ml/opik/)
  * [Future AGI](https://futureagi.com) - 开源平台，用于评估、观测和改进 LLM 及 AI 智能体应用，提供链路追踪、评估、模拟和防护栏。免费套餐包含 50GB 存储、2K 评估额度、每月 100K 次 AI 网关请求、1M token 的文本智能体模拟和 60 分钟语音模拟，另有不限数量的项目/席位以及平台成本 $0 的 BYOK LLM-as-judge。[#opensource](https://github.com/future-agi/future-agi)
  * [Gonka Broker](https://gonkabroker.com/) - OpenAI 兼容 API，访问部署在去中心化 Gonka.ai GPU 网络上的开源模型。每月 1M+ 免费 token。可轻松与众多 AI 工具集成。
  * [Keywords AI](https://keywordsai.co) - 最佳 LLM 监控平台。一种格式、两行代码即可调用 200+ LLM。每月 10,000 次免费请求，平台功能 $0！
  * [Langfuse](https://langfuse.com/) - 开源 LLM 工程平台，帮助团队协作调试、分析和迭代其 LLM 应用。永久免费套餐包含每月 50k 次观测以及全部平台功能。[#opensource](https://github.com/langfuse/langfuse)
  * [LangWatch](https://langwatch.ai) - LLMOps 平台，帮助 AI 团队在可靠性、成本效益和性能方面衡量、监控和优化 LLM 应用。借助强大的 DSPy 组件，支持工程师与非技术团队无缝协作，对 GenAI 产品进行微调和产品化。免费套餐包含全部平台功能、每月 1k 条 trace 和 1 个工作流 DSPy 优化器。[#opensource](https://github.com/langwatch/langwatch)
  * [Latitude](https://latitude.so) - 开源（MIT）LLM 可观测性与评估平台，用于在生产环境中追踪、监控和评估 AI 智能体。免费 Starter 套餐包含每月 20K 额度、30 天数据保留和不限席位。[#opensource](https://github.com/latitude-dev/latitude-llm)
  * [Lumenfall.ai](https://lumenfall.ai/) - AI 媒体网关，通过 OpenAI 兼容 API 统一访问主流图像生成模型。平台本身免费使用，零加价、无订阅费。大多数模型的推理费用按提供商价格计费，但 FLUX.1 [schnell] FP8 对注册用户永久免费且用量不限。内置故障转移和提供商容灾能力。
  * [Maxim](https://www.getmaxim.ai) - LLM 评估与可观测性平台，提供智能体模拟和提示词试验场。免费套餐提供每月 10k 条日志、提示词试验场访问权限，以及通过 BYOK 进行模拟和评估。
  * [Mediaworkbench.ai](https://mediaworkbench.ai) - MediaWorkbench.ai 为 Azure OpenAI、DeepSeek 和 Google Gemini 模型提供 100,000 个免费词额度，让用户能够使用代码生成、深度研究和图像创作等强大工具。
  * [OpenRouter](https://openrouter.ai/models?q=free) - 提供多种免费 AI 模型，包括 DeepSeek R1、V3、Llama 和 Moonshot AI。这些模型在自然语言处理方面表现出色，适用于各种开发需求。请注意，这些模型虽可免费使用，但受速率限制。此外，OpenRouter 还提供更高级需求所需的付费模型，例如 Claude、OpenAI、Grok、Gemini 和 Nova。
  * [Pollinations.AI](https://pollinations.ai/) - 易用的免费图像生成 AI，提供免费 API。无需注册或 API 密钥，并提供多种集成到网站或工作流的方式。[#opensource](https://github.com/pollinations/pollinations)
  * [Portkey](https://portkey.ai/) - Gen AI 应用的控制面板，具备可观测性套件和 AI 网关。每月可免费发送并记录最多 10,000 次请求。
  * [ReportGPT](https://ReportGPT.app) - AI 驱动的写作助手。只要自带 API 密钥，整个平台完全免费。
  * [telemetry.dev](https://telemetry.dev) - 基于 OpenTelemetry 构建的 AI/LLM 应用可观测性。追踪模型调用和工具步骤，包含 token、成本、延迟和错误；可使用任意语言通过 HTTP 发送 OTLP，或使用 TypeScript SDK。免费套餐包含每月 10,000 个 span、7 天数据保留、1 个项目和 2 个席位，无需信用卡。
  * [Transcript LOL](https://transcript.lol/) - 使用 AI 将音频或视频转换为文本。利用 LLM 生成摘要和其他洞察。免费套餐包含每天 2 次转写。你可以上传文件、录制语音备忘，或使用 YouTube、Instagram 等平台的链接。免费版还支持 WhatsApp、Telegram，并可直接从 Google Drive、Dropbox、Box 和 OneDrive 等云存储导入文件。无需 API 密钥，注册即可使用。还提供手机、桌面和 Chromebook 应用。
  * [Zenable](https://zenable.io) - 使用以 Policy as Code 构建的防护栏，即时自动修复来自 Cursor、Windsurf 和 Copilot 等工具的输出，使其符合公司的质量与合规标准。免费套餐包含每天 100 次对 MCP 服务器的工具调用，以及每天 25 次通过 GitHub App 进行的免费自动化拉取请求审查。

**[⬆️ 返回顶部](#目录)**

## CDN 与安全防护（CDN and Protection）

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) - 用于 bootstrap、bootswatch 和 fontawesome.io 的 CDN
  * [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月最多 5 TB 的免费 CDN 流量、19 个核心 PoP、1 个域名和通用 SSL。
  * [cdnjs.com](https://cdnjs.com/) - 简单、快速、可靠。极致的内容交付。cdnjs 是一项免费开源 CDN 服务，由 Cloudflare 提供支持，受到超过 11% 的网站信赖。
  * [developers.google.com](https://developers.google.com/speed/libraries/) - Google Hosted Libraries 是一个面向最流行开源 JavaScript 库的内容分发网络
  * [Gcore](https://gcorelabs.com/) - 全球内容分发网络，每月免费提供 1 TB 流量和 100 万次请求，并
    提供免费 DNS 托管
  * [jsdelivr.com](https://www.jsdelivr.com/) - 免费、快速、可靠的开源 CDN。支持 npm、GitHub、WordPress、Deno 等。
  * [Microsoft Ajax](https://learn.microsoft.com/en-us/aspnet/ajax/cdn/overview) - Microsoft Ajax CDN 托管 jQuery 等流行的第三方 JavaScript 库，让你可以轻松将它们添加到 Web 应用中
  * [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) - 免费 DDoS 防护
  * [ovh.ie](https://www.ovh.ie/ssl-gateway/) - 免费 DDoS 防护和 SSL 证书
  * [PromoProxy](https://promoproxy.net/) - 免费云安全 Web 网关。免费套餐支持最多 5 名用户和每天 1 GB。
  * [raw.githack.com](https://raw.githack.com/) - **rawgit.com** 的现代替代品，直接使用 Cloudflare 托管文件
  * [Skypack](https://www.skypack.dev/) - 100% 原生 ES Module JavaScript CDN。每域名每月 100 万次请求以内免费。
  * [statically.io](https://statically.io/) - 面向 Git 仓库（GitHub、GitLab、Bitbucket）、WordPress 相关资源和图片的 CDN
  * [Stellate](https://stellate.co/) - Stellate 是一款极速、可靠的 GraphQL API CDN，两个服务以内免费。
  * [toranproxy.com](https://toranproxy.com/) - Packagist 和 GitHub 的代理。让 CD 永不失败。个人使用免费，限一名开发者，不提供支持
  * [UNPKG](https://unpkg.com/) - npm 上一切内容的 CDN
  * [weserv](https://images.weserv.nl/) - 图片缓存与缩放服务。借助全球缓存即时处理图片。

**[⬆️ 返回顶部](#目录)**

## 平台即服务（PaaS）

  * [ampt.dev](https://getampt.com/) - Ampt 让团队无需复杂配置或管理基础设施，即可在 AWS 上构建、部署和扩展 JavaScript 应用。免费 Preview 套餐包含每小时 500 次调用、每天 2,500 次调用和每月 50,000 次调用。自定义域名仅在付费套餐中提供。
  * [anvil.works](https://anvil.works) - 仅用 Python 进行 Web 应用开发。免费套餐提供不限数量的应用和 30 秒超时。
  * [Apply.build](https://apply.build/) - 免费构建和部署你的 GitHub 应用，提供 0.5 vCPU / 512 MiB RAM、欧洲服务器、自动防火墙和实时性能指标。可运行 Node.js、Python、Go、Java、静态网站、微服务等。
  * [appwrite](https://appwrite.io) - 不限数量的项目，项目不会暂停（支持 websocket），并提供身份验证服务。免费套餐每个项目含 1 个数据库、3 个存储桶、5 个函数。
  * [Clever Cloud](https://clever.cloud) - 欧洲 PaaS，提供自动化部署、自动扩缩、托管数据库和基于 Git 的工作流。注册即赠 €20 免费额度，包含有限的 DEV 套餐（提供免费 MySQL 和 PostgreSQL 数据库），以及 Heptapod 和 FS Buckets 等服务的免费配额。
  * [Choreo](https://wso2.com/choreo/) - AI 原生的内部开发者平台即服务。免费套餐包含最多 5 个组件和每月 $100 额度。
  * [codenameone.com](https://www.codenameone.com/) - 面向 Java/Kotlin 开发者的开源跨平台移动应用开发工具链。商业用途免费，项目数量不限
  * [Cohesivity](https://cohesivity.ai) - 专为 AI 智能体打造的无头后端与服务，包含托管、数据库、存储、LLM 和第三方 API。智能体式注册。免费套餐包含 10 个项目、100K 次边缘请求、10 GB 对象存储、100 封邮件，以及每月 5 USD 的 AI 与搜索额度。
  * [Daestro](https://daestro.com) - 跨云提供商和本地环境运行计算任务。免费套餐包含最多 10 个并发任务运行、2 个计算实例生成、自托管计算、1 个云提供商、1 个容器注册表和 1 个 cron 任务。
  * [Deno Deploy](https://deno.com/deploy) - 在全球边缘运行 JavaScript、TypeScript 和 WebAssembly 的分布式系统。免费套餐包含每天 100,000 次请求和每月 100 GiB 数据传输。
  * [domcloud.co](https://domcloud.co) - Linux 托管服务，提供基于 GitHub 的 CI/CD、SSH 以及 MariaDB/Postgres 数据库。免费版提供 1 GB 存储和每月 1 GB 网络流量限制，且仅限使用免费域名。
  * [encore.dev](https://encore.dev/) - 使用静态分析提供自动化基础设施、无样板代码等能力的后端框架。为爱好项目提供免费云托管。
  * [faable.com](https://faable.com/) - 部署应用时自动检测 Python 和 Node.js 框架。免费套餐每个项目包含一个 0.5 CPU / 1 GB RAM 实例、10 GB 带宽、每天 10 次成功部署、自动 SSL 和内置 WAF，以及 OAuth 2.0 / OIDC 身份验证。应用在 2 小时无流量后休眠。欧洲服务器。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 通过 Git push 风格的工作流，在你自己的 AWS 账户上部署 Web 服务、数据库等。面向个人 GitHub 仓库且仅 1 名开发者的用户提供免费套餐。AWS 费用通过 AWS 结算，但你可以使用额度和 AWS 免费套餐。
  * [gigalixir.com](https://gigalixir.com/) - Gigalixir 为 Elixir/Phoenix 应用提供一个永不休眠的免费实例和一个免费套餐 PostgreSQL 数据库，数据库限制为 2 个连接、10,000 行数据且无备份。
  * [Northflank](https://northflank.com) - 通过强大的 UI、API 和 CLI 构建和部署微服务、任务和托管数据库。从版本控制和外部 Docker 注册表无缝扩缩容器。免费套餐包含两个服务、两个 cron 任务和 1 个数据库。
  * [Ownkube](https://ownkube.io) - 在你自己的 AWS 账户中免费运行单节点 k3s，通过 git push 运行应用、数据库和工作进程。以最高效率使用你的 AWS 额度。
  * [pipedream.com](https://pipedream.com) - 为开发者打造的集成平台。基于任意触发器开发任意工作流。工作流即代码，可[免费](https://docs.pipedream.com/pricing/)运行。无需管理服务器或云资源。
  * [pythonanywhere.com](https://www.pythonanywhere.com/) - 云端 Python 应用托管。Beginner 账户免费，提供 1 个位于 your-username.pythonanywhere.com 域名的 Python Web 应用、512 MB 私有文件存储和 1 个 MySQL 数据库
  * [Runsite](https://runsite.app/) - 欧洲 PaaS，支持从 GitHub 自动部署 Web 服务或静态网站（1 个 Web 服务免费：0.1 vCPU/256 MB）、托管 PostgreSQL 和 Valkey(Redis)（免费 30 天）、事务性邮件（每月免费 3,000 封）、S3 兼容存储（5 GB 免费），是开启网站所需的一切。服务器位于德国。
  * [Val Town](https://www.val.town) - 面向脚本、HTTP 端点和 cron 任务的协作式 TypeScript/JavaScript 无服务器平台。免费套餐包含不限数量的公开 val、15 分钟 cron 间隔、每次运行 1 分钟实际耗时和 3 天日志保留。免费版不支持自定义域名。
  * [WunderGraph](https://cloud.wundergraph.com) - 开源平台，让你快速构建、发布和管理现代 API。内置 CI/CD、GitHub 集成和自动 HTTPS。[免费套餐](https://wundergraph.com/pricing)支持最多 3 个项目、1GB 出站流量、每月 300 分钟构建时间
  * [YepCode](https://yepcode.io) - 在无服务器环境中连接 API 和服务的一体化平台。它兼具无代码工具的全部敏捷性与优势，同时拥有使用编程语言的全部能力。免费套餐包含 [1.000 yeps](https://yepcode.io/pricing/)。

**[⬆️ 返回顶部](#目录)**

## 后端即服务（BaaS）

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，在应用后端将多个应用连接在一起。例如，当应用中触发事件时发送 Slack 消息或向 Google Sheet 添加一行。每月最多免费 5,000 个任务。
  * [back4app.com](https://www.back4app.com) - Back4App 是一个基于 Parse Platform 的易用、灵活且可扩展的后端。
  * [backendless.com](https://backendless.com/) - 移动和 Web BaaS，免费提供 1 GB 文件存储、每月 50,000 条推送通知和表中 1000 个数据对象。
  * [connectycube.com](https://connectycube.com) - 不限数量的聊天消息、p2p 语音和视频通话、文件附件和推送通知。用户不超过 1000 人的应用免费。
  * [convex.dev](https://convex.dev/) - 响应式后端即服务，托管你的数据（带关联关系的文档和可序列化的 ACID 事务）、无服务器函数，以及向各类客户端流式推送更新的 WebSocket。小型项目免费——最多 100 万条记录、每月 500 万次函数调用。
  * [ETLR](https://etlr.io) - 使用 YAML 定义、版本化和部署自动化脚本。开发者优先的拖拽工具替代方案。可用于定时任务、AI 智能体和基础设施监控。免费套餐包含每月 100 额度。
  * [Flutter Flow](https://flutterflow.io) - 无需编写一行代码即可构建 Flutter 应用 UI。还提供 Firebase 集成。免费套餐包含对 UI Builder 和免费模板的完整访问。
  * [getstream.io](https://getstream.io/) - 只需数小时而非数周即可构建可扩展的应用内聊天、消息、视频和音频以及信息流
  * [IFTTT](https://ifttt.com) - 自动化你喜爱的应用和设备。免费提供 2 个 Applet
  * [Integrately](https://integrately.com) - 一键自动化繁琐任务。免费提供 100 个任务、15 分钟
  * [LeanCloud](https://leancloud.app/) - 移动后端。免费提供 1GB 数据存储、256MB 实例、每天 3K 次 API 请求和每天 10K 次推送。（API 与 Parse Platform 非常相似）
  * [nhost.io](https://nhost.io) - 面向 Web 和移动应用的无服务器后端。免费套餐包含 PostgreSQL、GraphQL（Hasura）、身份验证、存储和无服务器函数。
  * [onesignal.com](https://onesignal.com/) - 不限数量的免费推送通知。每月 10,000 封邮件发送，联系人数量不限，并可使用 Auto Warm Up。
  * [paraio.com](https://paraio.com) - 后端服务 API，提供灵活的身份验证、全文搜索和缓存。1 个应用、1GB 应用数据免费。
  * [pubnub.com](https://www.pubnub.com/) - 免费推送通知，每月最多 100 万条消息和 100 台日活设备
  * [pusher.com](https://pusher.com/beams) - 面向 2000 名月活用户的免费、不限数量推送通知。适用于 iOS 和 Android 设备的单一 API。
  * [simperium.com](https://simperium.com/) - 即时自动地在各处移动数据，跨平台，结构化数据的发送和存储数量不限，每月最多 2,500 名用户
  * [snill.ai](https://snill.ai) - AI 无代码平台，可将纯语言描述转换为完整的业务系统，包含关系型数据库、仪表板、工作流、REST API 和 webhook。面向个人运营者的免费套餐包含 2 个应用、1,000 条记录和每天 10 次 AI 请求。
  * [Supabase](https://supabase.com) - 用于构建后端的开源 Firebase 替代品。免费套餐提供身份验证、实时数据库和对象存储。
  * [tyk.io](https://tyk.io/) - 提供身份验证、配额、监控和分析的 API 管理。免费云产品
  * [zapier.com](https://zapier.com/) - 连接你使用的应用以自动化任务。每 15 分钟运行 5 个 zap，每月 100 个任务
更新时间，5 个活动自动化、webhook。

**[⬆️ 返回顶部](#目录)**

## 低代码平台（Low-code Platform）

  * [appsmith](https://www.appsmith.com/) - 用于构建管理面板、内部工具和仪表板的低代码项目。可与 15+ 数据库和任意 API 集成。
  * [BudiBase](https://budibase.com/) - Budibase 是一个开源低代码平台，可在数分钟内创建内部应用。支持 PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s
  * [Clappia](https://www.clappia.com) - 低代码平台，旨在通过可自定义的移动和 Web 应用构建业务流程应用。提供拖拽界面、离线支持、实时位置追踪等功能，并可与各种第三方服务集成
  * [lil'bots](https://www.lilbots.io/) - 利用 OpenAI、Anthropic、Firecrawl 等免费内置 API 在线编写和运行脚本。非常适合构建 AI 智能体/内部工具并与团队共享。免费套餐包含对 API 的完整访问、AI 编码助手和每月 10,000 执行额度。
  * [manubes](https://www.manubes.com) - 强大的无代码云平台，专注于工业生产管理。一名用户免费，每月 100 万次工作流活动（[也提供德语版](https://www.manubes.de)）。
  * [Mendix](https://www.mendix.com/) - 面向企业的快速应用开发，提供不限数量的可访问沙箱环境，支持全部用户，每个应用 0.5 GB 存储和 1 GB RAM。此外，免费套餐允许使用 Studio 和 Studio Pro IDE。
  * [outsystems.com](https://www.outsystems.com/) - 面向本地或云的企业级 Web 开发 PaaS，免费的“个人环境”提供不限数量的代码和最多 1 GB 数据库
  * [ReTool](https://retool.com/) - 用于构建内部应用的低代码平台。Retool 极具可改造性。只要能用 JavaScript 和 API 实现，就能在 Retool 中完成。免费套餐每月最多支持 5 名用户，应用和 API 连接数量不限。
  * [ToolJet](https://www.tooljet.com/) - 用于构建业务应用的可扩展低代码框架。可连接数据库、云存储、GraphQL、API 端点、Airtable 等，并使用拖拽式应用构建器构建应用。
  * [UI Bakery](https://uibakery.io) - 低代码平台，可更快地构建自定义 Web 应用。支持通过拖拽构建 UI，并可通过 JavaScript、Python 和 SQL 进行高度自定义。提供云和自托管两种方案。最多 5 名用户免费。

**[⬆️ 返回顶部](#目录)**

## 网站托管（Web Hosting）

  * [Alwaysdata](https://www.alwaysdata.com/) - 1 GB 免费 Web 托管，支持 MySQL、PostgreSQL、RabbitMQ、.NET、Deno、Elixir、Go、Java、Lua、Node.js、PHP、Python、Ruby、Rust。支持自定义 Web 服务器，可通过 FTP、WebDAV 和 SSH 访问。包含邮箱、邮件列表和应用安装器。免费套餐不支持自定义域名。
  * [Awardspace.com](https://www.awardspace.com) - 免费 Web 托管 + 免费短域名，支持 PHP、MySQL、应用安装器、邮件发送且无广告。
  * [boomurl](https://boomurl.com) - 无需账户即可将静态网站（HTML/Markdown/图片/PDF 或整个文件夹）发布到即时 HTTPS URL；免费套餐会显示一个小横幅。支持自定义域名。
  * [Bubble](https://bubble.io/) - 通过可视化编程无需代码构建 Web 和移动应用，免费版带 Bubble 品牌标识。
  * [dAppling Network](https://www.dappling.network/) - 面向 Web3 前端的去中心化 Web 托管平台，专注于提升可用性和安全性，并为用户提供额外的访问入口。
  * [DigitalOcean](https://www.digitalocean.com/pricing) - 在 App Platform Starter 套餐上免费构建和部署三个静态网站。
  * [FreeFlarum](https://freeflarum.com/) - 社区驱动的免费 Flarum 托管，最多支持 250 名用户（捐赠可去除页脚水印）。
  * [Harvis.dev](https://harvis.dev) - 通过 CLI（`npx harvis`）进行静态网站托管，无需配置文件或构建步骤。包含免费子域名、免费表单提交收集、GitHub Actions 集成、CloudFlare CDN 和免费 SSL。
  * [Koyeb](https://www.koyeb.com/) - 无服务器平台，免费 Hobby 套餐提供每月 550 个免费计算小时（免费套餐 512 MB RAM）、1 个免费 PostgreSQL 数据库和自定义域名 SSL。
  * [MDB GO](https://mdbgo.com/) - 一个项目的免费托管，提供两周容器 TTL、每个项目 500 MB RAM、SFTP——1G 磁盘空间。
  * [Mirin](https://mirin.com) - 面向开发者构建的 React、Vue 或 Svelte 组件网站的平台，提供可视化编辑、表单、分析和全球 CDN 托管。免费套餐包含 1 个站点，页面和提交数量不限。
  * [Neocities](https://neocities.org) - 静态托管，1 GB 免费存储，200 GB 带宽。
  * [Netlify](https://www.netlify.com/) - 免费构建、部署和托管静态网站/应用，每月 300 积分（等于 30 GB 带宽）。
  * [PandaStack](https://www.pandastack.io/) - 面向开发者的生态系统，包含多种形式的 Web 托管（静态 Web 托管、基于容器的 Web 托管、wordpress 以及众多只需点击几下即可使用的托管应用）。一个免费 Web 托管（静态或容器化）和一个免费数据库，提供 100GB 带宽和每月 300 构建分钟。
  * [pantheon.io](https://pantheon.io/) - Drupal 和 WordPress 托管、自动化 DevOps 和可扩展基础设施。对开发者和代理商免费。不支持自定义域名。
  * [Qoddi](https://qoddi.com) - 类似 Heroku 的 PaaS 服务，以开发者为中心、功能一应俱全。免费套餐适用于静态资源、预发布环境和开发者应用。
  * [readthedocs.org](https://readthedocs.org/) - 免费文档托管，支持版本管理、PDF 生成等
  * [render.com](https://render.com) - 统一的云平台，用于构建和运行应用与网站，提供免费 SSL、全球 CDN、专用网络、从 Git 自动部署，以及面向 Web 服务、数据库和静态网页的完全免费套餐。
  * [Revdoku](https://revdoku.com/) — 直接从 ChatGPT、Claude、Codex 和其他 AI 智能体发布文件、报告和自定义微站，作为公开或密码保护的网站。免费套餐：2GB 存储、2 个线上网站/应用、1 个数据库（25 MB）、3 个 AI 连接、每个存储桶 1k 个文件（每个文件 100 MB）、基础分析。
  * [ShipStatic](https://shipstatic.com) - 你的 AI 智能体可自行驱动的静态托管：`npx @shipstatic/ship ./dist` 即可让网站上线，无需安装、注册、仓库或构建。还提供 MCP、SDK 和 API。免费账户可永久保留网站，具备自动 HTTPS、全球边缘交付和不计量带宽；自定义域名需付费。
  * [SourceForge](https://sourceforge.net/) - 免费查找、创建和发布开源软件
  * [surge.sh](https://surge.sh/) - 面向前端开发者的静态 Web 发布。网站数量不限，支持自定义域名
  * [tilda.cc](https://tilda.cc/) - 1 个网站、50 个页面、50 MB 存储，仅可使用 170+ 个预定义区块中的主要区块，无字体、无 favicon，且不支持自定义域名
  * [Vercel](https://vercel.com/) - 构建、部署和托管 Web 应用，提供免费 SSL、全球 CDN，每次 `git push` 都生成独特的 Preview URL。非常适合 Next.js 和其他静态网站生成器。
  * [Versoly](https://versoly.com/) - 专注 SaaS 的网站构建器——网站数量不限、70+ 区块、五个模板、自定义 CSS、favicon、SEO 和表单。不支持自定义域名。
* [Stormkit](https://www.stormkit.io) - 可自托管的 Vercel 替代品，用于构建、托管和部署现代前端及 JavaScript 应用。免费套餐包含 1 个应用、50 GB 带宽、不限数量的自定义域名和免费 SSL。

**[⬆️ 返回顶部](#目录)**

## 域名解析（DNS）

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 免费公共 DNS 解析器，快速且安全（加密你的 DNS 查询），由 Cloudflare 提供。可用于绕过互联网提供商的 DNS 封锁、防止 DNS 查询被窥探，以及[屏蔽成人和恶意软件内容](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。也可[通过 API](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests) 使用。注意：它只是 DNS 解析器，不是 DNS 托管商。
  * [1984.is](https://www.1984.is/product/freedns/) - 免费 DNS 服务，包含 API 和许多其他免费 DNS 功能。
  * [cloudns.net](https://www.cloudns.net/) - 免费 DNS 托管，最多 1 个域名、50 条记录
  * [deSEC](https://desec.io) - 免费 DNS 托管，支持 API，在设计上注重安全。运行于开源软件，由 [SSE](https://www.securesystems.de/) 提供支持。
  * [dns.he.net](https://dns.he.net/) - 免费 DNS 托管服务，支持 Dynamic DNS
  * [dnspod.com](https://www.dnspod.com/) - 免费 DNS 托管。
  * [duckdns.org](https://www.duckdns.org/) - 免费 DDNS，免费套餐最多支持 5 个域名。提供各种部署方式的配置指南。
  * [Dynv6.com](https://dynv6.com/) - 免费 DDNS 服务，支持 [API](https://dynv6.com/docs/apis)，可管理多种 DNS 记录类型（如 CNAME、MX、SPF、SRV、TXT 等）。
  * [freedns.afraid.org](https://freedns.afraid.org/) - 免费 DNS 托管。还基于众多公开用户[贡献的域名](https://freedns.afraid.org/domain/registry/)提供免费子域名。注册后从“Subdomains”菜单获取免费子域名。
  * [Glauca](https://docs.glauca.digital/hexdns/) - 免费 DNS 托管，最多支持 3 个域名，支持 DNSSEC
  * [Hetzner](https://www.hetzner.com/dns-console) - Hetzner 提供的免费 DNS 托管，支持 API。
  * [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) - 华为提供的免费 DNS 托管
  * [LocalCert](https://localcert.net) - 免费的 `.localcert.net` 子域名，兼容公共 CA，可在私有网络内使用
  * [luadns.com](https://www.luadns.com/) - 免费 DNS 托管，三个域名，包含所有功能并有合理限制
  * [namecheap.com](https://www.namecheap.com/domains/freedns/) - 免费 DNS。域名数量不限
  * [nextdns.io](https://nextdns.io) - 基于 DNS 的防火墙，每月 300K 次免费查询
  * [noip.at](https://noip.at/) - 免费 DDNS 服务，无需注册、跟踪、日志或广告。域名数量不限。
  * [noip](https://www.noip.com/) - 动态 DNS 服务，免费支持最多 3 个主机名，每 30 天需确认一次
  * [sslip.io](https://sslip.io/) - 免费 DNS 服务，当查询包含内嵌 IP 地址的主机名时，返回该 IP 地址。
  * [zilore.com](https://zilore.com/en/dns) - 免费 DNS 托管，支持 5 个域名。
  * [zoneedit.com](https://www.zoneedit.com/free-dns/) - 免费 DNS 托管，支持 Dynamic DNS。
  * [Zonomi](https://zonomi.com/) - 免费 DNS 托管服务，DNS 即时生效。免费套餐：1 个 DNS 区域（域名），最多 10 条 DNS 记录。

**[⬆️ 返回顶部](#目录)**

## 域名（Domain）

  * [DigitalPlat](https://domain.digitalplat.org) - 免费子域名。
  * [DNSHE](https://www.dnshe.com/) - 跨多个域名后缀的免费子域名注册，支持自定义域名服务器。
  * [isroot.in](https://isroot.in) - 免费 isroot.in 子域名。
  * [pp.ua](https://nic.ua/) - 免费 pp.ua 子域名。

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务（IaaS）

  * [4EVERLAND](https://www.4everland.org/) - 兼容 AWS S3——支持 API、界面操作、CLI 和其他上传方式，安全、方便、高效地上传和存储来自 IPFS 与 Arweave 网络的文件。注册用户可免费获得 6 GB IPFS 存储和 300MB Arweave 存储。小于 150 KB 的 Arweave 文件上传免费。
  * [backblaze.com](https://www.backblaze.com/b2/) - Backblaze B2 云存储。免费 10 GB（类似 Amazon S3）对象存储，使用时间不限
  * [filebase.com](https://filebase.com/) - 由区块链驱动的 S3 兼容对象存储。5 GB 免费存储，使用时间不限。
  * [Modal](https://modal.com) - AI 驱动的 IaaS，提供慷慨的算力和存储；每月提供 $30（某些账户可能限 $5）免费额度

**[⬆️ 返回顶部](#目录)**

## 托管数据服务（Managed Data Services）

  * [8base.com](https://www.8base.com/) - 8base 是面向 JavaScript 开发者的全栈低代码开发平台，基于 MySQL、GraphQL 和无服务器后端即服务（backend-as-a-service）构建。可借助 UI 应用构建器快速构建 Web 应用并快速扩展；免费套餐包含 2,500 行数据、500 存储、1Gb/h 无服务器计算时长以及 5 个客户端应用用户。
  * [airtable.com](https://airtable.com/) - 看似电子表格，实则是关系型数据库；base 数量不限，每个 base 1,200 行，每月 1,000 次 API 请求。
  * [Aiven](https://aiven.io/) - Aiven 在其开源数据平台上提供免费的 PostgreSQL、MySQL 和 Valkey（兼容 Redis）套餐。单节点、1 CPU、1GB RAM，PostgreSQL 和 MySQL 另含 1GB 存储。可轻松升级到更高规格套餐或跨云迁移。
  * [BackupDrill](https://backupdrill.com) - 将 Supabase 项目备份到你自己的 S3/R2/B2 存储桶，然后按计划运行恢复演练，以验证备份确实可以恢复。免费套餐支持一个项目的每周备份，并在首次备份时执行一次恢复演练。
  * [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) - 免费套餐每月提供 5,000 万 RU 和 10 GiB 存储（价值 15 美元）。（[什么是 Request Units](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
  * [codehooks.io](https://codehooks.io/) - 易用的 JavaScript 无服务器 API/后端与 NoSQL 数据库服务，具备函数、类 MongoDB 查询、键/值查找、任务系统、实时消息、工作队列、强大的 CLI 和基于 Web 的数据管理器。免费套餐含 5GB 存储，API 调用限制为每分钟 60 次，包含 2 名开发者。无需信用卡。
  * [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的全托管数据库集群：1 个节点、8GB 存储，专为开发者打造，用于构建从 IoT 到 AI 的下一代应用。
  * [CrateDB](https://crate.io/) - 面向实时分析的分布式开源 SQL 数据库。[Free Tier CRFREE](https://crate.io/lp-crfree)：单节点，2 个 CPU、2 GiB 内存、8 GiB 存储。每个组织一个集群，无需付款方式。
  * [filess.io](https://filess.io) - filess.io 平台可免费创建两个数据库，每个数据库最高 10 MB，支持以下 DBMS：MySQL、MariaDB、MongoDB 和 PostgreSQL。
  * [InfluxDB](https://www.influxdata.com/) - 时序数据库，免费额度：每 5 分钟 3MB 写入、每 5 分钟 30MB 读取，以及 10,000 个基数序列（series）。
  * [Layerbase](https://layerbase.com/) - 2 个免费托管数据库，可选：Postgres、MariaDB、Redis、Valkey、DuckDB、SQLite、libSQL 和 TypeDB。全部支持 TLS。8 个免费引擎中有 7 个支持分支，每个数据库 1 个分支；免费版吞吐量限制为 10 GB/天、50 GB/周、150 GB/月。更高套餐另有 10 个引擎，且无计量限制。
  * [MemCachier](https://www.memcachier.com/) - 托管 Memcache 服务。免费支持最高 25MB、1 台代理服务器和基础分析功能。
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - 免费套餐提供 512 MB。
  * [Neo4j Aura](https://neo4j.com/cloud/aura/) - 托管的原生图数据库管理系统（Graph DBMS）/分析平台，使用 Cypher 查询语言并提供 REST API。图大小有限制（20 万节点、40 万关系）。
  * [Neon](https://neon.tech/) - 托管 PostgreSQL，每个项目 0.5 GB 存储，100 个项目，每个项目 10 个分支，数据库数量不限；主分支始终可用（5 分钟后自动挂起），非主分支计算每月（总计）20 小时活跃时间。
  * [Nile](https://www.thenile.dev/) - 面向 B2B 应用的 Postgres 平台。数据库数量不限，始终可用不关闭，1GB 存储（总计），5,000 万查询 token，自动扩缩容，向量嵌入数量不限。
  * [Prisma Postgres](https://prisma.io/postgres) - 超快的托管 Postgres，基于 unikernel 构建并运行在裸机上，总计 500MB 存储、5 个数据库，与 Prisma ORM 集成。
  * [Qdrant](https://qdrant.tech/) - 用于嵌入数据的向量数据库，单节点集群配置为 0.5 vCPU、1GB RAM、4GB 磁盘。
  * [restdb.io](https://restdb.io/) - 快速、易用的 NoSQL 云数据库服务。restdb.io 提供模式、关系、自动 REST API（支持类 MongoDB 查询）以及高效的多用户数据管理 UI。免费套餐支持 3 名用户、2,500 条记录，每秒 1 次 API 请求。
  * [SeaTable](https://seatable.io/) - 由 Seafile 团队打造的灵活的类电子表格数据库。表格数量不限，2,000 行，保留 1 个月版本历史，最多 25 名团队成员。
  * [skyvia.com](https://skyvia.com/) - 云数据平台，提供免费套餐，Beta 期间所有套餐完全免费。
  * [StackBy](https://stackby.com/) - 一款融合电子表格的灵活性、数据库的强大功能，并内置常用商业应用集成的工具。免费套餐包含不限用户数、10 个 stack，每个 stack 支持 2GB 附件。
  * [Tinybird](https://tinybird.co) - 无服务器托管 ClickHouse，支持通过 HTTP 进行无连接数据摄入，并可将 SQL 查询发布为托管 HTTP API。免费套餐无时间限制，含 10GB 存储及每天 1,000 次 API 请求。
  * [Turso by ChiselStrike](https://turso.tech/) - Turso 在边缘数据库中提供 SQLite 式的开发者体验。Turso 提供永久免费入门套餐：总计 9 GB 存储、最多 500 个数据库、最多 3 个位置、每月 10 亿次行读取，并支持使用 SQLite 进行本地开发。
  * [Upstash](https://upstash.com/) - 无服务器 Redis，免费套餐每月最多 50 万条命令、数据库最大 256MB、20 个并发连接。

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket 服务器及其他路由（Tunneling, WebRTC, Web Socket Servers and Other Routers）

  * [cname.dev](https://cname.dev/) - 免费、安全的动态反向代理服务。
  * [conveyor.cloud](https://conveyor.cloud/) - Visual Studio 扩展，可将 IIS Express 暴露到本地网络，或通过隧道暴露到公共 URL。
  * [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费套餐包含欧盟服务器、随机子域名以及单用户。
  * [Hamachi](https://www.vpn.net/) - LogMeIn Hamachi 是一款托管 VPN 服务，可让你安全地将近似 LAN 的网络扩展到分布式团队；免费套餐支持创建不限数量的网络，每个网络最多 5 人。
  * [Hookdeck](https://hookdeck.com/pricing) - 随时随地开发、测试和监控你的 Webhook。每月 10 万次请求和 10 万次尝试，数据保留 3 天。
  * [localhost.run](https://localhost.run/) - 通过隧道将本地运行的服务器暴露到公共 URL。
  * [localtonet](https://localtonet.com/) - 多协议隧道，支持 HTTP、TLS、TCP、UDP、文件服务器（Default、SFTP、WebDAV）和代理隧道（HTTP、SOCKS5、Shadowsocks、VLESS）。免费套餐：1 条隧道、每月 1GB 带宽、30 分钟超时（HTTP 隧道除外）。
  * [localtunnel](https://theboroer.github.io/localtunnel-www/) - 通过隧道将本地运行的服务器暴露到公共 URL。提供免费托管版本，并且[开源](https://github.com/localtunnel/localtunnel)。
  * [LocalXpose](https://localxpose.io) - 反向代理，可将你的 localhost 服务器暴露到互联网。免费套餐的隧道生命周期为 15 分钟。
  * [ngrok.com](https://ngrok.com/) - 通过隧道将本地运行的服务器暴露到公共 URL。
  * [Pinggy](https://pinggy.io) - 一条命令即可为 localhost 生成公共 URL，无需下载。支持 HTTPS / TCP / TLS 隧道。免费套餐的隧道生命周期为 60 分钟。
  * [Radmin VPN](https://www.radmin-vpn.com/) - 通过支持 VPN 的类 LAN 网络将多台计算机连接在一起。对等节点数量不限。（Hamachi 替代品）
  * [serveo](https://serveo.net/) - 将本地服务器暴露到互联网。无需安装、无需注册。免费子域名，无限制。
  * [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp) - Twilio STUN
  * [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302) - Google STUN
  * [Tailscale](https://tailscale.com/) - 零配置 VPN，使用开源 WireGuard 协议。可安装于 MacOS、iOS、Windows、Linux 和 Android 设备。个人使用免费套餐支持 100 台设备和 3 名用户。
  * [webhookrelay.com](https://webhookrelay.com) - 管理、调试、扇出并代理你的所有 Webhook 到公共或内部（即 localhost）目标。还可通过获取公共 HTTP 端点（`https://yoursubdomain.webrelay.io <----> http://localhost:8080`），经隧道暴露运行在私有网络中的服务器。
  * [Xirsys](https://www.xirsys.com/pricing/) - STUN 使用量不限 + 每月 500 MB TURN 带宽，带宽有上限，仅限单一地理区域。
  * [ZeroTier](https://www.zerotier.com) - FOSS 托管虚拟以太网即服务。免费套餐支持不限数量的端到端加密网络，每个网络 25 个客户端。提供桌面端/移动端/NA 客户端；可通过 Web 界面配置自定义路由规则，并审批私有网络上的新客户端节点。

**[⬆️ 返回顶部](#目录)**

## 问题追踪与项目管理（Issue Tracking and Project Management）

  * [acunote.com](https://www.acunote.com/) - 免费的项目管理与 SCRUM 软件，最多支持 5 名团队成员。
  * [asana.com](https://asana.com/) - 与协作者共同开展的私有项目可免费使用。
  * [Backlog](https://backlog.com) - 团队发布优质项目所需的一切尽在一个平台。免费套餐提供 1 个项目、10 名用户和 100MB 存储。
  * [Basecamp](https://basecamp.com/personal) - 待办清单、里程碑管理、论坛式消息、文件共享和时间追踪。最多 3 个项目、20 名用户和 1GB 存储空间。
  * [bitrix24.com](https://www.bitrix24.com/) - 内联网与项目管理工具。免费套餐为不限数量的用户提供 5GB 空间。
  * [cacoo.com](https://cacoo.com/) - 在线实时图表：流程图、UML、网络图。免费版每个图表最多 15 名用户、25 个图纸。
  * [clickup.com](https://clickup.com/) - 项目管理。免费，高级版附带云存储。提供移动应用和 Git 集成。
  * [Clockify](https://clockify.me) - 时间追踪器与工时表应用，可跨项目追踪工作时长。用户数量不限，永久免费。
  * [Cloudcraft](https://cloudcraft.co/) - 使用 Cloudcraft 可视化设计器在几分钟内绘制专业架构图；它为 AWS 优化，智能组件还可展示实时数据。免费套餐支持单用户创建不限数量的私有图表。
  * [Confluence](https://www.atlassian.com/software/confluence) - Atlassian 的内容协作工具，帮助团队高效协作与共享知识。免费套餐最多支持 10 名用户。
  * [Crosswork](https://crosswork.app/) - 多功能项目管理平台。免费支持最多 3 个项目、不限用户数、1 GB 存储。
  * [diagrams.net](https://app.diagrams.net/) - 在线图表，可本地存储于 Google Drive、OneDrive 或 Dropbox。所有功能和存储级别均免费。
  * [easyretro.io](https://www.easyretro.io/) - 简单直观的冲刺回顾工具。免费套餐包含 3 个公开看板，每个看板每月 1 次调查。
  * [freedcamp.com](https://freedcamp.com/) - 任务、讨论、里程碑、时间追踪、日历、文件和密码管理器。免费套餐支持不限数量的项目、用户和文件存储。
  * [GForge](https://gforge.com) - 面向复杂项目的项目管理与议题追踪工具集，支持本地部署和 SaaS 选项。SaaS 免费套餐为前 5 名用户免费，开源项目也可免费使用。
  * [gleek.io](https://www.gleek.io) - 面向开发者的免费描述转图表工具。用关键词即可创建非正式的 UML 类图、对象图或实体关系图。
  * [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - GraphQL Inspector 可输出两个 GraphQL schema 之间的变更列表。每处差异都有精确说明，并标记为破坏性、非破坏性或危险。
  * [Helploom](https://helploom.com) - 客户支持软件，永久免费套餐提供在线客服聊天功能。简单、轻量、美观。安装只需复制粘贴一段脚本。由开发者打造。
  * [HeyRetro](https://heyretro.io/) - 实时冲刺回顾平台，具备投票、计时器、调查、访客协作和破冰游戏。永久免费套餐每月含 1 个看板、匿名调查和访客链接分享。
  * [Hygger](https://hygger.io) - 项目管理平台。免费套餐支持不限数量的用户、项目和看板，含 100 MB 存储。
  * [Ilograph](https://www.ilograph.com/) - 交互式图表，让用户从多个视角和细节层级查看其基础设施。图表可用代码表达。免费套餐支持不限数量的私有图表，最多 3 名查看者。
  * [Jira](https://www.atlassian.com/software/jira) - 先进的软件开发项目管理工具，广泛用于各类企业环境。免费套餐最多支持 10 名用户。
  * [kan.bn](https://kan.bn/) - 强大、灵活的看板应用，帮助你在一处组织工作、追踪进度并交付成果。免费套餐支持 1 名用户创建不限数量的看板、列表和卡片。
  * [kanbanflow.com](https://kanbanflow.com/) - 基于看板的项目管理。免费，高级版提供更多选项。
  * [kanbantool.com](https://kanbantool.com/) - 基于看板的项目管理。免费套餐含 2 个看板和 2 名用户，不支持附件或文件。
  * [Kitemaker.co](https://kitemaker.co) - 在产品开发流程的所有阶段协作，并跨 Slack、Discord、Figma 和 Github 追踪工作。用户和空间数量不限。免费套餐最多 250 个工作项。
  * [Kiter.app](https://www.kiter.app/) - 帮助任何人整理求职信息，追踪面试、机会和人脉。功能强大的 Web 应用和 Chrome 扩展。完全免费。
  * [Kumu.io](https://kumu.io/) - 关系图谱，支持动画、装饰、过滤器、聚类、电子表格导入等。免费套餐允许不限数量的公开项目，图大小不限。学生可免费创建私有项目。如果你不希望文件公开在线，可使用沙盒模式（上传、编辑、下载、丢弃）。
  * [leiga.com](https://www.leiga.com/) - Leiga 是一款利用 AI 自动管理项目的 SaaS 产品，帮助团队保持专注、释放巨大潜力，确保项目按计划推进。免费支持最多 10 名用户、20 个自定义字段、2GB 存储空间；AI 视频录制每个视频限 5 分钟，自动化运行为每用户每月 20 次。
  * [Linear](https://linear.app/) - 界面简洁流畅的议题追踪工具。免费支持不限成员数，文件上传大小最高 10MB，250 个议题（不含归档）。
  * [Lucidchart](https://www.lucidchart.com/) - 具备协作功能的在线图表工具。免费套餐含 3 个可编辑文档、100 个专业模板和基础协作功能。
  * [MeisterTask](https://www.meistertask.com/) - 面向团队的在线任务管理。免费支持最多 3 个项目和不限数量的项目成员。
  * [MeuScrum](https://www.meuscrum.com/en) - 免费的在线 scrum 工具，带看板。
  * [nTask](https://www.ntaskmanager.com/) - 项目管理软件，让团队能够协作、规划、分析和管理日常任务。基础套餐永久免费，含 100 MB 存储和 5 名用户/团队。工作区、会议、任务分配、工时表和议题追踪数量不限。
  * [Plane](https://plane.so/) - Plane 是一款简单、可扩展的开源项目与产品管理工具。免费支持不限成员数，文件上传大小最高 5MB，1,000 个议题。
  * [planitpoker.com](https://www.planitpoker.com/) - 免费的在线计划扑克（估算工具）。
  * [point.poker](https://www.point.poker/) - 在线计划扑克（基于共识的估算工具）。免费支持不限数量的用户、团队、会议、轮次和投票。无需注册。
  * [Pulse.red](https://pulse.red) - 免费的极简项目时间追踪与工时表应用。
  * [ScrumFast](https://www.scrumfast.com) - 界面非常直观的 Scrum 看板，免费支持最多 5 名用户。
  * [Sflow](https://sflow.io) - sflow.io 是为敏捷软件开发、市场营销、销售和客户支持打造的项目管理工具，尤其适合外包和跨组织协作项目。免费套餐最多 3 个项目和 5 名成员。
  * [Shake](https://www.shakebugs.com/) - 面向移动应用的应用内缺陷报告与反馈工具。免费套餐每个应用每月 10 份缺陷报告。
  * [Shortcut](https://shortcut.com/) - 项目管理平台。免费支持最多 10 名用户，永久有效。
  * [taiga.io](https://taiga.io/) - 面向初创公司和敏捷开发者的项目管理平台，对开源项目免费。
  * [taskade.com](https://www.taskade.com/) - 实时协作的任务清单和团队大纲。免费套餐含 1 个工作区，任务和项目数量不限；1GB 文件存储；1 周项目历史；每次视频会议最多 5 名参会者。
  * [Teaminal](https://www.teaminal.com) - 面向远程团队的站会、回顾会和冲刺规划工具。免费支持最多 15 名用户。
  * [teamwork.com](https://teamwork.com/) - 项目管理与团队聊天。免费支持 5 名用户和 2 个项目。提供高级套餐。
  * [teleretro.com](https://www.teleretro.com/) - 简单有趣的回顾工具，带破冰环节、GIF 和表情符号。免费套餐含 3 次回顾和不限成员数。
  * [Tenzu](https://tenzu.net/) - 面向敏捷团队的轻量级项目管理工具。该 SaaS 依靠自愿付费贡献维持；用户始终可以选择支付 0，且不存在功能付费墙。{[更多详情](https://tenzu.net/pricing/)}
  * [titanapps.io](https://titanapps.io/) - 面向 Jira 和 monday.com 的效率工具，在议题/任务中提供结构化清单、模板和审批。小团队可使用免费套餐。
  * [todoist.com](https://todoist.com/) - 协作式与个人任务管理。免费套餐包含：5 个活动项目、每个项目 5 名用户、最高 5MB 文件上传、3 个过滤器以及 1 周活动历史。
  * [Toggl](https://toggl.com/) - 提供两款免费效率工具。[Toggl Track](https://toggl.com/track/) 是时间管理与追踪应用，其免费套餐专为自由职业者设计，提供流畅的时间追踪与报告，追踪记录、项目、客户、标签、报告等数量不限。[Toggl Plan](https://toggl.com/plan/) 用于任务规划，其免费套餐面向独立开发者，任务、里程碑和时间线数量不限。
  * [trello.com](https://trello.com/) - 基于看板的项目管理。个人看板数量不限，10 个团队看板。
  * [Tweek](https://tweek.so/) - 简单的每周待办日历与任务管理工具。
  * [Wikifactory](https://wikifactory.com/) - 产品设计服务，包含项目、版本控制系统（VCS）和议题。免费套餐支持不限数量的项目与协作者，含 3GB 存储。
  * [Yodiz](https://www.yodiz.com/) - 敏捷开发与议题追踪。免费支持最多 3 名用户，项目数量不限。
  * [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) - 为 FOSS 项目和私有项目提供免费托管 YouTrack（InCloud）（3 名用户免费）。包含时间追踪和敏捷看板。
  * [zenhub.com](https://www.zenhub.com) - GitHub 内唯一的项目管理解决方案。公共仓库、OSS 和非营利组织可免费使用。
  * [zenkit.com](https://zenkit.com) - 项目管理与协作工具。免费支持最多 5 名成员、5 GB 附件。
  * [Zube](https://zube.io) - 项目管理，免费套餐支持 4 个项目和 4 名用户。提供 GitHub 集成。

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理（Storage and Media Processing）

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件共享平台，速度、带宽、文件数量、下载次数等均不限。主要面向 Android 开发相关文件，如 APK 构建、自定义 ROM 和修改版等，但似乎也接受其他任何文件。
  * [anon.li Drop](https://anon.li/drop) - 零知识 E2EE 文件共享，采用客户端 AES-256-GCM 加密，服务端零数据访问。通过网站、CLI 或 API 免费上传最大 5GB 的文件，最长有效期 3 天。
  * [borgbase.com](https://www.borgbase.com/) - 为 Borg Backup 提供简单、安全的异地备份托管。10 GB 免费备份空间和 2 个仓库。
  * [cloudinary.com](https://cloudinary.com/) - 为网站和应用提供图片上传、强大的处理、存储和分发能力，提供 Ruby、Python、Java、PHP、Objective-C 等语言的库。免费套餐每月含 25 个积分。1 个积分相当于 1,000 次图片转换、1 GB 存储或 1 GB CDN 用量。
  * [degoo.com](https://degoo.com/) - 基于 AI 的云存储，免费提供最高 20 GB、3 台设备、5 GB 推荐奖励（账户 90 天不活跃）。
  * [dlvr.sh](https://dlvr.sh/) - 面向智能体和自动化的临时文件投递服务。免费套餐每 24 小时可投递 10 次，并提供 API、MCP 和 CLI 访问。
  * [Dropshare](https://dropsha.re) - 零知识文件共享。端到端加密文件共享，采用 AES-256-GCM 加密和客户端处理，服务端零数据访问。免费上传最大 1GB 的文件，不收集数据。
  * [embed.ly](https://embed.ly/) - 提供在网页中嵌入媒体、响应式图片缩放以及从网页提取元素的 API。免费支持每月最多 5,000 个 URL，速率为每秒 15 次请求。
  * [Ente](https://ente.io/) - Ente 是端到端加密的云服务，用于照片、视频和 2FA 密钥。也可自托管，并提供慷慨的永久免费套餐 10GB。免费套餐用户仅保留单一副本的数据。
  * [FileShot.io](https://fileshot.io) - 零知识加密文件共享。AES-256-GCM 浏览器端加密确保文件在上传前于浏览器内完成加密。发送方和接收方均无需账户。可自托管（MIT 开源）。免费套餐上传次数不限，无文件大小限制。
  * [file.io](https://www.file.io) - 2 GB 文件存储。文件在一次下载后自动删除。提供 REST API 与存储交互。速率限制为每分钟 1 次请求。
  * [freetools.site](https://freetools.site/) - 免费在线工具。转换或编辑文档、图片、音频、视频等。
  * [getpantry.cloud](https://getpantry.cloud/) - 简单的 JSON 数据存储 API，非常适合个人项目、黑客松和移动应用！
  * [GoFile.io](https://gofile.io/) - 免费文件共享与存储平台，可通过基于 Web 的 UI 和 API 使用。文件大小、带宽、下载次数等均不限。但文件变为不活跃状态时会被删除（超过 10 天无下载）。
  * [gumlet.com](https://www.gumlet.com/) - 通过 CDN 进行图片与视频托管、处理和流式传输。提供慷慨的免费套餐：视频每月 250 GB、图片每月 30 GB。
  * [hyperserve.io](https://hyperserve.io/) - 面向开发者的视频后端 API：接受用户上传的任何格式，转码为 MP4，并通过 CDN 全球分发。免费套餐含 50 个视频、每个文件 1 GB、每月 250 GB 带宽。
  * [icedrive.net](https://www.icedrive.net/) - 简单的云存储服务。10 GB 免费存储。
  * [image-charts.com](https://www.image-charts.com/) - 不限数量的带水印图片图表生成。
  * [ImageEngine](https://imageengine.io/) - ImageEngine 是易于使用的全球图片 CDN。设置不到 60 秒。支持 AVIF 和 JPEGXL，提供 WordPress、Magento、React、Vue 等插件。在[这里](https://imageengine.io/developer-program/)领取免费开发者账户。
  * [imagekit.io](https://imagekit.io) - 图片 CDN，具备自动优化、实时转换和存储能力，可在几分钟内集成到现有环境。免费套餐每月最高 20GB 带宽。
  * [ImgBB](https://imgbb.com/) - ImgBB 是不限容量的图片托管服务。将图片拖放到屏幕任意位置即可。每张图片限制 32 MB。上传图片后可获得图片直链、BBCode 和 HTML 缩略图。登录后可查看上传历史。
  * [Imgbot](https://github.com/marketplace/imgbot) - Imgbot 是一个友好的机器人，可优化你的图片并节省时间。优化后的图片文件更小且不损失质量。对开源项目免费。
  * [imgen](https://www.jitbit.com/imgen/) - 即时图片生成 API（背景文字、logo），用于生成 OpenGraph 图片，免费、无水印、带 CDN。
  * [imgix](https://www.imgix.com/) - 图片缓存、管理和 CDN。免费套餐含 1,000 张源站图片、不限次数转换和 100 GB 带宽。
  * [internxt.com](https://internxt.com) - Internxt Drive 是基于绝对隐私和毫不妥协的安全性的零知识文件存储服务。注册即可永久免费获得 10 GB！
  * [kraken.io](https://kraken.io/) - 以服务形式提供用于提升网站性能的图片优化，免费套餐文件大小最高 1 MB。
  * [LibreQR](https://libreqr.com) - 免费二维码生成器，注重隐私、不追踪。免费使用，不收集数据。
  * [MConverter](https://mconverter.eu/) - 批量转换文件。支持多种格式，包括 [AVIF](https://mconverter.eu/convert/to/avif/) 和 JXL。可从视频中提取图像帧、压缩 PDF。每 24 小时可免费处理 15 个文件，每个最大 100 MB，每批处理 8 个。
  * [nitropack.io](https://nitropack.io/) - 通过完整的前端优化（缓存、图片和代码优化、CDN）自动加速你的网站。免费支持每月最多 5,000 次页面浏览。
  * [npoint.io](https://www.npoint.io/) - JSON 存储，支持协作式 schema 编辑。
  * [MantleDB](https://mantledb.sh) - 面向脚本和小型应用的匿名 JSON 存储。无需注册；使用 Master AID 更新，使用只读 RID 进行公开获取。免费套餐含 1 个存储桶（限制 1MB），采用 72 小时不活跃清理策略。
  * [otixo.com](https://www.otixo.com/) - 在一处加密、共享、复制和移动你的所有云存储文件。基础套餐提供不限次数的文件传输，单个文件最大 250 MB，并允许 5 个加密文件。
  * [packagecloud.io](https://packagecloud.io/) - 托管 YUM、APT、RubyGem 和 PyPI 的软件包仓库。提供限量免费套餐，开源套餐可申请获得。
  * [pcloud.com](https://www.pcloud.com/) - 云存储服务。最高 10 GB 免费存储。
  * [Pinata IPFS](https://pinata.cloud) - Pinata 是在 IPFS 上上传和管理文件的最简单方式。友好的用户界面和 IPFS API 使 Pinata 成为面向平台、创作者和收藏者的最易用 IPFS 固定（pinning）服务。免费 1 GB 存储，并提供 API 访问。
  * [plot.ly](https://plot.ly/) - 绘制图表并分享你的数据。免费套餐包含不限数量的公开文件和 10 个私有文件。
  * [podio.com](https://podio.com/) - 你可以与最多 5 人的团队一起使用 Podio，体验基础套餐的功能（用户管理除外）。
  * [Proton Drive](https://proton.me/drive) - 面向文件和重要文档的超安全云存储。免费套餐提供 5gb 存储空间。
  * [QRtracer](https://qrtracer.io) - 免费二维码生成器，内置扫描分析、批量生成和品牌定制功能，注重可靠性且无任何广告。
  * [QuickChart](https://quickchart.io) - 生成可嵌入的图片图表、图形和二维码。
  * [redbooth.com](https://redbooth.com) - P2P 文件同步，免费支持最多 2 名用户。
  * [resmush.it](https://resmush.it) - reSmush.it 是一个提供图片优化的免费 API，已在 WordPress、Drupal、Magento 等最常见的 CMS 上实现。reSmush.it 是使用最广泛的图片优化 API，已处理超过 70 亿张图片，并且仍然完全免费。
  * [sirv.com](https://sirv.com/) - 智能图片 CDN，支持即时图片优化和缩放。免费套餐含 500 MB 存储和 2 GB 带宽。
  * [SlingSite](https://slingsite.github.io) - 免费批量创建图片和视频的所有优化版本。每张图片可获得以下格式：AVIF、WEBP 和 JPG，以及三种选定分辨率（桌面端、平板端、移动端）。视频可获得：WebM（编解码器 VP9）、MP4（编解码器 HEVC，即 H.265）和 MP4（编解码器 AVC，即 H.264），以及首帧封面图。
  * [sync.com](https://www.sync.com/) - 端到端云存储服务。5 GB 免费存储。
  * [tinypng.com](https://tinypng.com/) - 用于压缩和缩放 PNG 与 JPEG 图片的 API，每月免费提供 500 次压缩。
  * [transloadit.com](https://transloadit.com/) - 处理文件上传以及视频、音频、图片、文档的编码。开源项目、慈善机构和通过 GitHub Student Developer Pack 认证的学生可免费使用。商业应用可获得 2 GB 免费试用额度。
  * [twicpics.com](https://www.twicpics.com) - 响应式图片即服务。提供图片 CDN、媒体处理 API 和用于自动化图片优化的前端库。每月流量 3GB 以内免费。
  * [uploadcare.com](https://uploadcare.com/hub/developers/) - Uploadcare 提供基于前沿算法的终极媒体处理工具链。所有功能对开发者完全免费：文件上传 API 和 UI、图片 CDN 与源站服务、自适应分发和智能压缩。免费套餐含 3,000 次上传、3 GB 流量和 3 GB 存储。
  * [VaocherApp QR Code Generator](https://www.vaocherapp.com/qr-code-generator) - 轻松为礼品卡、礼品券和促销活动创建自定义二维码。支持自定义样式、颜色、logo……

**[⬆️ 返回顶部](#目录)**

## 设计与 UI（Design and UI）

  * [Beste](https://beste.co) - 基于 shadcn/ui 区块、以组合优先的网站构建器。免费套餐允许绑定你自己的自定义域名，包含不限数量的页面、多语言支持、博客、表单和托管。
  * [BoxySVG](https://boxy-svg.com) - 免费的可安装 Web 应用，用于绘制 SVG 并导出为 SVG、PNG、jpeg 等格式。
  * [BrandIcons](https://brandicons.dev) - 网站图标（Favicon）API。基于 AI 为没有图标甚至没有 Web 服务器的域名发现图标。免费套餐每月 500,000 次请求，需注明出处。
  * [Calendar Icons Generator](https://calendariconsgenerator.app/) - 一键生成一整年的独特图标，完全免费。
  * [Canva](https://canva.com) - 免费在线设计工具，用于创作视觉内容。
  * [CodedThemes](https://codedthemes.com/) - 提供精心制作的管理后台仪表板和 UI 套件，旨在简化并加速现代 Web 开发。
  * [Excalidraw](https://excalidraw.com/) - 免费的在线绘图文档网页，支持免费保存到本地和导出。
  * [figma.com](https://www.figma.com) - 面向团队的在线协作设计工具；免费套餐包含不限数量的文件和查看者，最多 2 名编辑者和 3 个项目。
  * [Flows](https://flows.sh/) - 完全可自定义的产品采用平台，用于构建新手引导和用户互动体验。免费支持每月最多 250 名被追踪用户。
  * [JoyDemo](https://joydemo.com) - 为你的网站或应用创建可交互、可点击的演示。免费，演示数量和浏览次数均不限。
  * [landen.co](https://www.landen.co) - 为你的初创公司生成、编辑和发布精美的网站和落地页。全程无需代码。免费套餐允许拥有 1 个完全可自定义并发布到网上的网站。
  * [lensdump.com](https://lensdump.com/) - 免费云端图片托管。
  * [Logo.dev](https://www.logo.dev) - 公司 logo API，覆盖超过 4,400 万个品牌，调用就像访问 URL 一样简单。前 10,000 次 API 调用免费。
  * [marvelapp.com](https://marvelapp.com/) - 设计、原型制作与协作，免费套餐限 1 名用户和 1 个项目。
  * [Mindmup.com](https://www.mindmup.com/) - 免费创建不限数量的思维导图并存储在云端。你的思维导图可在任何设备上即时、随处访问。
  * [Mockplus iDoc](https://www.mockplus.com/idoc) - Mockplus iDoc 是强大的设计协作与交付工具。免费套餐含 3 名用户和 5 个项目，所有功能均可用。
  * [photopea.com](https://www.photopea.com) - 免费的高级在线设计编辑器，具有 Adobe Photoshop 风格的 UI，支持 PSD、XCF 和 Sketch 格式（Adobe Photoshop、Gimp 和 Sketch App）。
  * [Plasmic](https://www.plasmic.app/) - 快速、易用、可靠的 Web 设计工具和页面构建器，可集成到你的代码库中。构建响应式页面或复杂组件；可选择用代码扩展；并发布到生产环境的网站和应用。
  * [Proto.io](https://www.proto.io) - 无需编码即可创建完全可交互的 UI 原型。免费试用结束后可使用免费套餐。免费套餐含 1 名用户、1 个项目、5 个原型、100MB 在线存储以及 proto.io 应用预览。
  * [Quant Ux](https://quant-ux.com/) - Quant Ux 是一款原型制作与设计工具。——完全免费且开源。
  * [Shadcn Studio](https://shadcnstudio.com/theme-editor) - 在不同组件和布局中预览你的主题更改。
  * [smartmockups.com](https://smartmockups.com/) - 创建产品模型，提供 200 个免费模型。
  * [SVGicons.com](https://svgicons.com/) - 免费的开源 SVG 图标搜索引擎，收录超过 31.2 万个图标，提供即用型 SVG、React、Vue、HTML 和 CSS 代码。
  * [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台。TeleportHQ 是协作式前端平台，可即时创建并发布无头静态网站。3 个免费项目，协作者数量不限，代码导出免费。
  * [Unicorn Platform](https://unicornplatform.com/) - 轻松易用的落地页构建器，含托管服务。免费创建 1 个网站。
  * [Updrafts.app](https://updrafts.app) - 基于 tailwindcss 设计的所见即所得网站构建器。非商业用途免费。
  * [Webflow](https://webflow.com) - 所见即所得的网站构建器，带动画和网站托管。免费支持 2 个项目。
  * [Webstudio](https://webstudio.is/) - Webflow 的开源替代品。免费套餐在其域名上提供不限数量的网站、5 个绑定自定义域名的网站、每月 1 万次页面浏览和 2 GB 资产存储。
  * [whimsical.com](https://whimsical.com/) - 协作式流程图、线框图、便签和思维导图。最多免费创建 4 个看板。
  * [Zeplin](https://zeplin.io/) - 设计师与开发者协作平台。展示设计、资产和样式指南。1 个项目免费。
  * [WrapPixel](https://www.wrappixel.com/) - 下载使用 Angular、React、VueJs、NextJS 和 NuxtJS 创建的高质量免费与高级管理后台仪表板模板！HTML 主题和 UI 套件助你更快构建应用！
  * [Themeselection](https://themeselection.com/) - 精选的高质量、设计现代、专业且易用的免费管理后台仪表板模板。
  * [Admin Mart](https://adminmart.com/) - 使用 Angular、Bootstrap、React、VueJs、NextJS 和 NuxtJS 创建的高质量免费与高级管理后台及网站模板！

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化（Data Visualization on Maps）

  * [Clockwork Micro](https://clockworkmicro.com/) - 如钟表般精准运行的地图工具。每月免费 5 万次查询（地图瓦片、db2vector、海拔高程）。
  * [Foursquare](https://developer.foursquare.com/) - 通过 Places API 和 Pilgrim SDK 提供位置发现、场所搜索和情境感知内容。
  * [geoapify.com](https://www.geoapify.com/) - 矢量与栅格地图瓦片、地理编码、地点、路线规划、等值线 API。每天免费 3,000 次请求。
  * [geocod.io](https://www.geocod.io/) - 通过 API 或 CSV 上传进行地理编码。每天免费 2,500 次查询。
  * [geocodify.com](https://geocodify.com/) - 通过 API 或 CSV 上传进行地理编码与地理文本解析。每月免费 1 万次查询。
  * [geojs.io](https://www.geojs.io/) - 高可用的 REST/JSON/JSONP IP 地理位置查询 API。
  * [Geokeo api](https://geokeo.com) - 地理编码 API，具备语言纠正等功能。覆盖全球。每天免费 2,500 次查询。
  * [graphhopper.com](https://www.graphhopper.com/) - 为路线规划、路线优化、距离矩阵、地理编码和地图匹配提供免费开发者软件包。
  * [here](https://developer.here.com/) - 面向地图和位置感知应用的 API 与 SDK。每月免费 25 万次事务。
  * [IP Geolocation](https://ipgeolocation.io/) - 提供免费开发者套餐，每月 3 万次请求。
  * [ipstack](https://ipstack.com/) - 通过 IP 地址定位并识别网站访客。
  * [LatLng](https://www.latlng.work) - 地理编码、逆地理编码、地点、静态地图和矢量地图瓦片 API。免费套餐含每天 3,000 次地理编码请求、300 次逆地理编码请求和 100 张静态地图图片。
  * [locationiq.com](https://locationiq.com/) - 地理编码、地图和路线规划 API。每天免费 5,000 次请求。
  * [mapbox.com](https://www.mapbox.com/) - 用于展示地图数据的地图、地理空间服务和 SDK。
  * [maps.stamen.com](https://maps.stamen.com/) - 免费地图瓦片及瓦片托管。
  * [maptiler.com](https://www.maptiler.com/cloud/) - 用于地图可视化的矢量地图、地图服务和 SDK。免费矢量瓦片，每周更新，提供 4 种地图样式。
  * [nominatim.org](https://nominatim.org/) - OpenStreetMap 的免费地理编码服务，提供全球地址搜索功能和逆地理编码能力。
  * [opencagedata.com](https://opencagedata.com) - 聚合 OpenStreetMap 和其他开放地理数据源的地理编码 API。每天免费 2,500 次查询。
  * [osmnames](https://osmnames.org/) - 地理编码，搜索结果按相关 Wikipedia 页面的热度排名。
  * [positionstack](https://positionstack.com/) - 面向全球地点和坐标的免费地理编码。个人使用每月 25,000 次请求。
  * [stadiamaps.com](https://stadiamaps.com/) - 地图瓦片、路线规划、导航及其他地理空间 API。非商业用途和测试每天免费 2,500 次地图浏览和 API 请求。
  * [SqlInt](https://sqlint.com) — 浏览器内 SQL 工作区，提供免费工具，包括 JOIN 可视化器、SQL 格式化工具、CSV/JSON 转 SQL 转换器和练习题；无需账户或信用卡。

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统（Package Build System）

  * [build.opensuse.org](https://build.opensuse.org/) - 面向多个发行版（SUSE、EL、Fedora、Debian 等）的软件包构建服务。
  * [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) - 面向 Fedora 和 EL 的基于 Mock 的 RPM 构建服务。
  * [help.launchpad.net](https://help.launchpad.net/Packaging) - Ubuntu 和 Debian 构建服务。

**[⬆️ 返回顶部](#目录)**

## IDE 与代码编辑（IDE and Code Editing）

  * [Android Studio](https://developer.android.com/studio) - Android Studio 提供最快的工具，可在各种类型的 Android 设备上构建应用。开源 IDE 对所有人免费，是最佳 Android 应用开发工具。适用于 Windows、Mac、Linux，甚至 ChromeOS！
  * [Apache Netbeans](https://netbeans.apache.org/) - 开发环境、工具平台和应用框架。
  * [apiary.io](https://apiary.io/) - 协作式 API 设计，提供即时 API mock 和自动生成的文档（免费支持不限数量的 API 蓝图和不限用户数，含 1 个管理员账户和托管文档）。
  * [BBEdit](https://www.barebones.com/) - BBEdit 是 macOS 上广受欢迎且可扩展的编辑器。免费模式提供[强大的核心功能集](https://www.barebones.com/products/bbedit/comparison.html)，并可升级获取高级功能。
  * [Binder](https://mybinder.org/) - 将 Git 仓库转换为一组交互式笔记本。这是一项免费的公共服务。
  * [BlueJ](https://bluej.org) - 专为初学者设计的免费 Java 开发环境，全球有数百万人使用。由 Oracle 提供支持，简单的 GUI 可帮助初学者。
  * [Brackets](https://brackets.io/) - Brackets 是一款专为 Web 开发设计的开源文本编辑器。轻量、易用且高度可自定义。
  * [cacher.io](https://www.cacher.io) - 带标签的代码片段管理工具，支持 100 多种编程语言。
  * [cocalc.com](https://cocalc.com/) - 在云端进行协作计算。通过浏览器访问完整的 Ubuntu，内置协作功能以及大量数学、科学、数据科学领域的免费软件，预装：Python、LaTeX、Jupyter Notebooks、SageMath、scikitlearn 等。
  * [Code::Blocks](https://codeblocks.org) - 免费的 Fortran 与 C/C++ IDE。开源，可运行于 Windows、macOS 和 Linux。
  * [Codeground](https://codeground.ai/) - 免费的浏览器 IDE 和演练场，支持 15 种以上语言以及 Postgres、MySQL、MongoDB 和 Redis。可分享代码片段、进行编程面试和使用云工作区。免费演练场无需安装。
  * [codiga.io](https://codiga.io/) - 编程助手，可让你直接在 IDE 中搜索、定义和复用代码片段。个人和小型组织可免费使用。
  * [Components.studio](https://webcomponents.dev/) - 在隔离环境中编写组件，在 story 中可视化，进行测试并发布到 npm。
  * [Eclipse Che](https://www.eclipse.org/che/) - 面向开发者团队的基于 Web、原生 Kubernetes 的 IDE，支持多语言。开源且由社区驱动。Red Hat 托管的在线实例位于 [workspaces.openshift.com](https://workspaces.openshift.com/)。
  * [ForgeCode](https://forgecode.dev/) - 支持 Claude、GPT4 系列、Grok、Deepseek、Gemini 等所有前沿模型的 AI 结对编程工具。原生适配你的 CLI，并可与任何 IDE 无缝集成。免费套餐包含基础 AI 模型访问及本地处理。
  * [GetVM](https://getvm.io) - 即时免费的 Linux 和 IDE Chrome 侧边栏。免费套餐每天 5 台 VM。
  * [JDoodle](https://www.jdoodle.com) - 支持 60 多种编程语言的在线编译器和编辑器，免费套餐的 REST API 代码编译每天最多 200 个积分。
  * [jetbrains.com](https://jetbrains.com/products.html) - 效率工具、IDE 和部署工具（即 [IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/) 等）。学生、教师、开源项目和用户组可申请免费许可证。
  * [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - 一组以 JSON 格式返回模拟数据的 REST API 端点。如果你想在本地运行服务器，也可以获取源代码。
  * [Lazarus](https://www.lazarus-ide.org/) - Lazarus 是兼容 Delphi 的跨平台 IDE，用于快速应用开发。
  * [LiveCodes](https://livecodes.io) - 开源的客户端代码演练场，支持 90 多种语言/框架。项目可保存、导出、分享、同步、部署（到 GitHub Pages）并嵌入网页。适配移动端。可自托管。不限用量免费使用。无需账户。
  * [MarsCode](https://www.marscode.com/) - 免费的 AI 驱动云端 IDE。
  * [micro-jaymock](https://micro-jaymock.now.sh/) - 用于生成模拟 JSON 数据的微型 API mock 微服务。
  * [mockaroo](https://mockaroo.com/) - Mockaroo 可让你生成 CSV、JSON、SQL 和 Excel 格式的逼真测试数据。也可为后端 API 创建 mock。
  * [Mocklets](https://mocklets.com) - 基于 HTTP 的 mock API 模拟器，帮助模拟 API 以实现更快的并行开发和更全面的测试，提供终身免费套餐。
  * [OneCompiler](https://onecompiler.com/) - 免费在线编译器，支持 70 多种语言，包括 Java、Python、C++、JavaScript。
  * [OnlineGDB](https://onlinegdb.com) - 免费在线 IDE，支持 40 多种语言，预装大量库；还提供调试选项、编译标志、教程和问答页面！
  * [pterocos](https://pterocos.eu.org) - 面向前端开发者的免费开源浏览器编码环境。使用 VS Code 级别的编辑器（monaco）编写 html、css 和 js，支持实时预览、scss/typeScript/babel，并提供用于调试和建议的 AI 聊天助手。所有项目保存到本地存储。永久免费——无需账户。
  * [Paiza](https://paiza.cloud/en/) - 无需任何配置即可在浏览器中开发 Web 应用。免费套餐提供 1 台服务器，24 小时生命周期，每天 4 小时运行时间，配置为 2 个 CPU 核心、2 GB RAM 和 1 GB 存储。
  * [PHPSandbox](https://phpsandbox.io/) - 面向 PHP 的在线开发环境。
  * [Replit](https://replit.com/) - 支持多种编程语言的云端编码环境。
  * [RunMat](https://runmat.com/sandbox) - 浏览器内 GPU 加速的数值计算 IDE。编写并运行 MATLAB 语法的 .m 文件，通过 WebAssembly 和 WebGPU 自动进行 GPU 加速。无需安装、无需账户、无许可费用。开源运行时，支持 CLI、NPM 软件包和 Jupyter 内核。
  * [SoloLearn](https://code.sololearn.com) - 云端编程演练场，非常适合运行代码片段。支持多种编程语言。运行代码无需注册，但在其平台上保存代码时需要注册。还为初学者和中级程序员提供免费课程。
  * [stackblitz.com](https://stackblitz.com/) - 用于创建、编辑和部署全栈应用的在线/云端代码 IDE。支持所有流行的基于 NodeJs 的前端与后端框架。创建新项目的短链接：[https://node.new](https://node.new)。
  * [Sublime Text](https://www.sublimetext.com/) - Sublime Text 是广受欢迎、用途广泛且高度可自定义的文本编辑器，用于编码和文本编辑任务。
  * [Visual Studio Code](https://code.visualstudio.com/) - 重新定义并优化的代码编辑器，用于构建和调试现代 Web 与云应用。由 Microsoft 开发。
  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) - 功能齐全的 IDE，拥有数千个扩展，支持跨平台应用开发（可下载 Microsoft 扩展用于 iOS 和 Android）、桌面、Web 和云开发，支持多种语言（C#、C++、JavaScript、Python、PHP 等）。
  * [VSCodium](https://vscodium.com/) - 社区驱动的 Microsoft 编辑器 VSCode 二进制发行版，无遥测/追踪，采用自由许可证。
  * [wakatime.com](https://wakatime.com/) - 通过文本编辑器插件量化记录你的编码活动指标，提供免费限量套餐。
  * [Wave Terminal](https://waveterm.dev/) - Wave 是一款开源、跨平台的终端，可实现流畅的工作流。可内联渲染任何内容。保存会话和历史。基于开放 Web 标准构建。支持 MacOS 和 Linux。

**[⬆️ 返回顶部](#目录)**

## 分析、事件与统计（Analytics, Events and Statistics）

  * [amplitude.com](https://amplitude.com/) - 每月 100 万个事件，最多 2 个应用
  * [AppFit](https://appfit.io) - AppFit 是一款综合性分析与产品管理工具，旨在实现无缝的跨平台分析与产品更新管理。免费套餐包含每月 10,000 个事件、产品日志和每周洞察。
  * [Aptabase](https://aptabase.com) - 开源、注重隐私且简单的移动与桌面应用分析工具。提供 Swift、Kotlin、React Native、Flutter、Electron 等多种 SDK。每月最多 20,000 个事件免费。
  * [Avo](https://avo.app/) - 简化的分析发布工作流。单一事实来源的埋点方案、类型安全的分析跟踪库、应用内调试器和数据可观测性，可在发布前发现所有数据问题。两个工作区成员免费，并提供 1 小时的数据可观测性回溯。
  * [Beampipe.io](https://beampipe.io) - Beampipe 是简单、注重隐私的网站分析工具。最多 5 个域名和每月 10k 页面浏览量免费。
  * [Census](https://www.getcensus.com/) - 反向 ETL 与运营分析平台。将数据仓库中的 10 个字段同步到 60+ 个 SaaS，如 Salesforce、Zendesk 或 Amplitude。
  * [Clicky](https://clicky.com) - 网站分析平台。免费套餐支持一个网站，含 3000 次浏览分析。
  * [counter.dev](https://counter.dev) - 简单因而注重隐私的网站分析。免费，或通过捐赠随心付费。
  * [DocBeacon](https://docbeacon.io) - 安全的文档共享，提供文档跟踪和互动分析。免费套餐支持最多 20 个 PDF 文档（最大 10 MB）、10 个联系人、每个文档 2 次分享，并提供浏览量、下载量、停留时间和互动度的基础分析。
  * [Dwh.dev](https://dwh.dev) - 数据云可观测性解决方案（Snowflake）。个人使用免费。
  * [Expensify](https://www.expensify.com/) - 费用报销，免费的个人报销审批工作流
  * [getinsights.io](https://getinsights.io) - 注重隐私、无 Cookie 的分析，每月最多 3k 事件免费。
  * [Gizmo Analytics](https://gizmoanalytics.io/) - 为管理大量站点的人提供的简单分析。可手动安装，也可让 Claude/Cursor 代劳。每月最多 10k 事件免费。
  * [GoatCounter](https://www.goatcounter.com/) - GoatCounter 是一个开源网站分析平台，提供托管服务（非商业用途免费）或自托管应用。它致力于提供易用且有意义的、注重隐私的网站分析，作为 Google Analytics 或 Matomo 的替代方案。免费套餐面向非商业用途，包含不限数量的站点、六个月数据保留和每月 100k 页面浏览量。
  * [Google Analytics](https://analytics.google.com/) - Google Analytics
  * [heap.io](https://heap.io) - 自动捕获 iOS 或 Web 应用中的每个用户操作。每月最多 10K 个会话免费。
  * [Hightouch](https://hightouch.com/) - Hightouch 是一个反向 ETL 平台，帮助你将客户数据从数据仓库同步到 CRM、营销和支持工具。免费套餐提供一个同步目标。
  * [HitKeep](https://hitkeep.com/) - 注重隐私的开源网站与产品分析平台，免费云套餐支持 3 个网站、3 名团队成员、60 天数据保留，以及 AI 分析、目标、漏斗、事件和命中。
  * [Hotjar](https://hotjar.com) - 网站分析与报告。免费套餐允许每天 2000 次页面浏览。每天一百个快照（最大容量：300）。三个快照热力图可保存 365 天。团队成员不限。还提供应用内和独立调查、带截图的反馈小部件。免费套餐允许创建 3 个调查和 3 个反馈小部件，每月收集 20 条回复。
  * [LogSpot](https://logspot.io) - 完整统一的网站与产品分析平台，包含可嵌入的分析小部件和自动化机器人（Slack、Telegram 和 Webhook）。免费套餐包含每月 10,000 个事件。
  * [Mixpanel](https://mixpanel.com/) - 每月 100,000 个被跟踪用户，不限数据历史和席位数，美国或欧盟数据驻留
  * [Moesif](https://www.moesif.com) - 面向 REST 和 GraphQL 的 API 分析。（每月最多 500,000 次 API 调用免费）
  * [PostHog](https://posthog.com) - 完整的产品分析套件，每月最多 100 万个被跟踪事件免费。还提供不限数量的应用内调查，每月 250 条回复。
  * [Repohistory](https://repohistory.com) - 精美的仪表盘，可跟踪超过 14 天的 GitHub 仓库流量历史。免费套餐允许用户监控单个仓库的流量。
  * [Row Zero](https://rowzero.io) - 极速的联网电子表格。直接连接数据库、S3 和 API。即时导入、分析、制图并分享数百万行数据。三个永久免费的工作簿。
  * [Rybbit](https://rybbit.io) - 开源、无 Cookie 的 Google Analytics 替代品，直观程度高 10 倍。免费套餐每月有 3,000 个事件。
  * [Seline](https://seline.so) - Seline 是一款简单且私密的网站与产品分析工具。无 Cookie、轻量、独立。免费套餐包含每月 3,000 个事件，并提供所有功能的访问权限，如仪表盘、用户旅程、漏斗等。
  * [StatCounter](https://statcounter.com/) - 网站访客分析。免费套餐可分析最近 500 名访客。
  * [Statsig](https://statsig.com) - 集分析、功能开关和 A/B 测试于一体的全能平台。每月最多 100 万个计量事件免费。
  * [TraceLog](https://tracelog.io/) - 面向电商的 AI 分析。用自然语言询问你的分析数据，获取可执行的建议，并借助 AI 驱动的洞察增长收入。每月最多 10k 事件免费。
  * [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据和像素问题，维护最新的埋点方案，并促进无缝协作。可在有真实流量的生产环境中部署，或在不编写代码的情况下为回归测试增加分析覆盖。
  * [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 免费、轻量且注重隐私的 Google Analytics 替代品。不限页面浏览量、不限访客、不限页面热力图和目标跟踪。最多 3 个域名免费，每个域名 600 次会话回放。
  * [Umami](https://umami.is/) - 简单、快速、注重隐私的开源 Google Analytics 替代品。
  * [usabilityhub.com](https://usabilityhub.com/) - 在真实用户身上测试设计和模型并跟踪访客。一个用户免费，测试不限。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制（Visitor Session Recording）

  * [FullStory.com](https://www.fullstory.com) - 每月 1,000 个会话，数据保留一个月，三个用户席位。更多信息见[此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [howuku.com](https://howuku.com) - 跟踪用户交互、互动和事件。每月最多 5,000 次访问免费
  * [inspectlet.com](https://www.inspectlet.com/) - 一个网站每月免费 2,500 个会话
  * [LogRocket.com](https://www.logrocket.com) - 每月 1,000 个会话，30 天保留，错误跟踪，实时模式
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，"无流量限制"、无项目限制、无抽样
  * [mouseflow.com](https://mouseflow.com/) - 一个网站每月免费 500 个会话
  * [OpenReplay.com](https://www.openreplay.com) - 开源会话回放，带有用于复现 Bug 的开发者工具、用于实时支持的实时会话以及产品分析套件。每月 1,000 个会话，可访问所有功能，保留 7 天。
  * [Reactflow.com](https://www.reactflow.com/) - 每个站点：每天 1,000 次页面浏览、三个热力图、三个小部件，免费的 Bug 跟踪
  * [smartlook.com](https://www.smartlook.com/) - 面向 Web 和移动应用的免费套餐（每月 1500 个会话）、三个热力图、一个漏斗、1 个月数据历史
  * [UXtweak.com](https://www.uxtweak.com/) - 录制并观看访客如何使用你的网站或应用。小型项目可不限时免费使用

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证 API 与 SDK（International Mobile Number Verification API and SDK）

  * [numverify](https://numverify.com/) - 全球电话号码验证和查询 JSON API。每月 100 次 API 请求
  * [veriphone](https://veriphone.io/) - 通过免费、快速、可靠的 JSON API 进行全球电话号码验证。每月 1000 次请求

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成（Payment and Billing Integration）

  * [Adapty.io](https://adapty.io/) - 提供开源 SDK 的一站式解决方案，用于将移动应用内订阅集成到 iOS、Android、React Native、Flutter、Unity 或 Web 应用。月收入不超过 $10k 免费。
  * [AllRatesToday](https://allratestoday.com) - 提供 150+ 种货币的实时中间市场汇率，附带官方 JavaScript、Python 和 PHP SDK。免费套餐包含每月 300 次 HTTPS 请求。
  * [Churnkey](https://churnkey.co) - 面向订阅业务的取消流程（开源）、流失指标和收入分析。永久免费。
  * [Currencyapi](https://currencyapi.com) - 免费的货币转换和汇率数据 API。每月免费 300 次请求，私人用途每分钟 10 次请求。
  * [CurrencyApi](https://currencyapi.net/) - 以 JSON 和 XML 提供法币和加密货币的实时汇率。免费套餐每月提供 1,250 次 API 请求。
  * [CurrencyFreaks](https://currencyfreaks.com/) - 提供当前和历史货币汇率。提供免费 DEVELOPER 套餐，每月 1000 次请求。
  * [currencylayer](https://currencylayer.com/) - 为你的业务提供可靠的汇率和货币转换，每月 100 次 API 请求免费。
  * [exchangerate-api.com](https://www.exchangerate-api.com) - 易用的货币转换 JSON API。免费套餐每天更新一次，每月限制 1,500 次请求。
  * [Exchange Rate API](https://exchange-rateapi.com) - 160+ 种货币的实时汇率，60 秒更新，提供官方 SDK。免费套餐包含每月 300 次请求。
  * [FraudLabsPRO](https://www.fraudlabspro.com) - 帮助商家防范支付欺诈和拒付。提供免费 Micro 套餐，每月 500 次查询。
  * [FxRatesAPI](https://fxratesapi.com) - 提供实时和历史汇率。免费套餐要求注明出处。
  * [Moesif API Monetization](https://www.moesif.com/) - 通过基于用量的计费从 API 获取收入。可连接 Stripe、Chargebee 等。免费套餐每月提供 30,000 个事件。
  * [ParityVend](https://www.ambeteco.com/ParityVend/) - 根据访客位置自动调整定价，助你向全球扩展业务并开拓新市场（购买力平价）。免费套餐包含每月 7,500 次 API 请求。
  * [Qonversion](https://qonversion.io/) - 全能型跨平台订阅管理平台，提供分析、A/B 测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购买和变现。兼容 iOS、Android、React Native、Flutter、Unity、Cordova、Stripe 和 Web。每月被跟踪收入不超过 $10k 免费。
  * [RevenueCat](https://www.revenuecat.com/) - 用于应用内购买和订阅的托管后端（iOS 和 Android）。每月被跟踪收入不超过 $2.5k 免费。
  * [vatlayer](https://vatlayer.com/) - 即时 VAT 号码验证和欧盟 VAT 税率 API，每月 100 次 API 请求免费

**[⬆️ 返回顶部](#目录)**

## Docker 相关（Docker Related）

  * [Appish](https://appi.sh/) - 只需一次 docker push 即可托管用于演示的 Docker 容器。免费套餐包含 1 个槽位，会话时长 2 小时。
  * [Container Registry Service](https://container-registry.com/) - 基于 Harbor 的容器管理解决方案。免费套餐为私有仓库提供 1 GB 存储空间。
  * [Docker Hub](https://hub.docker.com) - 一个免费私有仓库和不限数量的公开仓库，用于构建和存储 Docker 镜像
  * [quay.io](https://quay.io/) - 构建和存储容器镜像，公开仓库永久免费且不限数量
  * [ttl.sh](https://ttl.sh/) - 匿名且临时的 Docker 镜像注册表

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台（Dev Blogging Sites）

  * [AyeDot](https://ayedot.com/) - 以现代多媒体短篇 Miniblog 的形式，免费向世界分享你的想法、知识和故事。
  * [BearBlog](https://bearblog.dev/) - 极简、基于 Markdown 的博客和网站构建器。
  * [Dev.to](https://dev.to/) - 程序员分享想法、互相帮助成长的地方。
  * [Hashnode](https://hashnode.com/) - 面向开发者的无忧博客软件！
  * [Medium](https://medium.com/) - 对你关心的事情思考得更深入。
  * [JustBlogged](https://justblogged.com) - 免费博客平台，支持自定义域名，全球性能快速。

**[⬆️ 返回顶部](#目录)**

## 评论平台（Commenting Platforms）

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助你从网站受众中建立活跃社区。
  * [IntenseDebate](https://intensedebate.com/) - 功能丰富的评论系统，适用于 WordPress、Tumblr、Blogger 和许多其他网站平台。
  * [Remarkbox](https://www.remarkbox.com/) - 开源的托管评论平台，"在少数域名上设置一名管理员，完全控制行为与外观"可随心付费。
  * [Utterances](https://utteranc.es/) - 基于 GitHub issues 构建的轻量评论小部件。使用 GitHub issues 作为博客评论、Wiki 页面等！

**[⬆️ 返回顶部](#目录)**

## 截图 API（Screenshot APIs）

  * [ApiFlash](https://apiflash.com) - 基于 AWS Lambda 和 Chrome 的截图 API。支持整页截图、定时捕获和视口尺寸设置。
  * [microlink.io](https://microlink.io/) - 它可将任何网站转化为数据，例如元标签规范化、美观的链接预览、抓取能力，或作为服务提供的截图。每天 50 次请求，天天免费。
  * [PhantomJsCloud](https://PhantomJsCloud.com) - 浏览器自动化和页面渲染。免费套餐每天最多 500 页。自 2017 年起提供免费套餐。
  * [Renderwolf](https://ironfang.uk/renderwolf) - 总部位于英国的截图、PDF、图像、二维码和剪辑渲染 API，提供可复用模板和签名 URL。每月 250 次免费渲染，开始使用无需付款信息。
  * [screenshotbase.com](https://screenshotbase.com) - 每月 300 张免费截图。可从任何 URL 截图。快速、免费且可扩展。
  * [screenshotlayer.com](https://screenshotlayer.com/) - 捕获高度可定制的任何网站快照。每月 100 张快照免费
  * [screenshotmachine.com](https://www.screenshotmachine.com/) - 每月捕获 100 张快照，支持 png、gif 和 jpg，包括全长捕获，不仅仅是首页
  * [Screenshot Scout](https://screenshotscout.com/) - 面向开发者的截图 API。一次请求即可从任何 URL 获得干净、可用于生产环境的截图。免费套餐包含每月 200 张截图，永久有效。
  * [Shotpipe](https://shotpipe.io) - 为静态站点构建的截图和 Open Graph 图像 API。免费套餐包含每月 100 次渲染，无需信用卡。缓存渲染免费。
  * [SnapAPI](https://snapapi.pics) - 截图、视频录制、PDF 生成和网页数据提取 API。免费套餐包含每月 200 张截图。
  * [thumbnail.ws](https://thumbnail.ws) - 用于生成网站缩略图的 API。每月 1,000 次请求免费。

**[⬆️ 返回顶部](#目录)**

## Flutter 相关及无 Mac 构建 iOS 应用（Flutter Related and Building IOS Apps without Mac）

  * [CodeMagic](https://codemagic.io/) - Codemagic 是完全托管的移动应用 CI/CD。你可以使用基于 GUI 的 CI/CD 工具进行构建、测试和部署。免费套餐每月提供 500 免费分钟，以及一台 2.3 GHz、8 GB RAM 的 Mac Mini 实例。
  * [FlutLab](https://flutlab.io/) - FlutLab 是现代的 Flutter 在线 IDE，是创建、调试和构建跨平台项目的最佳场所。使用 Flutter 构建 iOS（无需 Mac）和 Android 应用。
  * [FlutterFlow](https://flutterflow.io/) -  FlutterFlow 是一个基于浏览器的拖放界面，使用 Flutter 构建移动应用。

**[⬆️ 返回顶部](#目录)**

## 隐私管理（Privacy Management）

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使组织符合 GDPR 及其他法规。免费套餐仅限较小团队，且仅提供 SaaS 版本。
  * [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包括同意管理、隐私请求处理（DSAR）和数据映射。免费套餐包含核心同意管理功能，并且还向经过验证的开源项目免费提供更高级的套餐。
  * [Cookiefirst](https://cookiefirst.com/) - Cookie 横幅、审计和多语言同意管理解决方案。免费套餐提供一次性扫描和单个横幅。
  * [Iubenda](https://www.iubenda.com/) - 隐私和 Cookie 政策以及同意管理。免费套餐提供有限的隐私和 Cookie 政策以及 Cookie 横幅。
  * [Ketch](https://www.ketch.com/) - 同意管理和隐私框架工具。免费套餐提供大部分功能，但访客数量有限。

**[⬆️ 返回顶部](#目录)**

## 其他杂项（Miscellaneous）

  * [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。可以精美的图片形式分享（例如用于 Twitter/Facebook 帖子），或以链接形式分享（例如用于聊天或论坛）。
  * [Blynk](https://blynk.io) - 一款带 API 的 SaaS，用于控制、构建和评估 IoT 设备。免费 Developer 套餐含 5 台设备、免费云服务和数据存储。还提供移动应用。
  * [cron-job.org](https://cron-job.org) - 在线 cronjobs 服务。不限数量的任务免费。
  * [Cronhooks](https://cronhooks.io/) - 调度准时或周期性的 Webhook。免费套餐允许 5 个临时调度。
  * [datelist.io](https://datelist.io) - 在线预订/预约排期系统。每月最多 5 次预订免费，包含 1 个日历
  * [FOSSA](https://fossa.com/) - 可扩展的端到端第三方代码、许可证合规和漏洞管理。
  * [Hook Relay](https://www.hookrelay.dev/) - 轻松为你的应用添加 Webhook 支持：代你完成排队、带退避的重试和日志记录。免费套餐每天 100 次投递、保留 14 天、3 个 Webhook 端点。
  * [Hosting Checker](https://hostingchecker.co) - 检查任何域名、网站或 IP 地址的托管信息，如 ASN、ISP、位置等。还包括多个托管和 DNS 相关工具。
  * [newreleases.io](https://newreleases.io/) - 通过电子邮件、Slack、Telegram、Discord 和自定义 Webhook 接收来自 GitHub、GitLab、Bitbucket、Python PyPI、Java Maven、Node.js NPM、Node.js Yarn、Ruby Gems、PHP Packagist、.NET NuGet、Rust Cargo 和 Docker Hub 的新版本通知。
  * [PDFMonkey](https://www.pdfmonkey.io/) - 在仪表盘中管理 PDF 模板，用动态数据调用 API，然后下载你的 PDF。每月提供 300 份免费文档。
  * [Pika Code Screenshots](https://pika.style/templates/code-image) - 使用扩展从代码片段和 VSCode 创建美观、可定制的截图。
  * [QuickType.io](https://quicktype.io/) - 从 JSON、schema 和 GraphQL 快速自动生成模型/类/类型/接口和序列化器，以便在任何编程语言中快速安全地处理数据。将 JSON 转换为任何语言中美观、类型安全的代码。
  * [readme.com](https://readme.com/) - 轻松打造精美文档，开源项目免费。
  * [redirect.pizza](https://redirect.pizza/) - 轻松管理支持 HTTPS 的重定向。免费套餐包含 10 个来源和每月 100,000 次命中。
  * [redirection.io](https://redirection.io/) - 用于为企业、营销和 SEO 管理 HTTP 重定向的 SaaS 工具。
  * [redirs.com](https://www.redirs.com/) — 简单的域名重定向，具备自动 SSL、分析和 URL 路径转发功能。基础用途免费（最多 5 个域名）。
  * [RedirHub](https://www.redirhub.com/) - API 优先的 URL 重定向基础设施，具备自定义域名服务器、边缘网络、HTTPS 和主动链接监控。免费套餐包含 2 个主机名、每月 100K 请求、自动 SSL、路径转发和 REST API 访问。
  * [ReqBin](https://reqbin.com/) - 在线发送 HTTP 请求。流行的请求方法包括 GET、POST、PUT、DELETE 和 HEAD。支持 Headers 和令牌认证。包含用于保存请求的基础登录系统。
  * [Smartcar API](https://smartcar.com) - 用于汽车的 API，可定位车辆、获取油箱、电量、里程表读数、解锁/锁止车门等。
  * [Sunrise and Sunset](https://sunrisesunset.io/api/) - 根据给定经纬度获取日出和日落时间。
  * [superfeedr.com](https://superfeedr.com/) - 符合 PubSubHubbub 标准的实时订阅源、导出和分析。免费版本定制功能较少。
  * [SurveyMonkey.com](https://www.surveymonkey.com) - 创建在线调查。在线分析结果。免费套餐每份调查仅允许 10 个问题和 100 份回复。
  * [SYNCDATE](https://syncdate.app) - 双向 Google Calendar 同步。免费套餐：2 个账户，事件不限。
  * [UUID Generator](https://newuuid.com/) - 即时生成企业级的 UUID v1、UUID v4、UUID v7、GUID、Nil UUID、CUID v1/v2、NanoID 和 ULID。
  * [Versionfeeds](https://versionfeeds.com) - 为你喜爱软件的版本发布提供自定义 RSS 订阅源。在一个订阅源中获取你的编程语言、库或心爱工具的最新版本。（前 3 个订阅源免费）

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具（Remote Desktop Tools）

  * [Parsec](https://parsec.app/) - 可在不限数量的设备上免费安装（个人用途），并允许单台设备同时最多 20 个连接。（非常适合游戏/低延迟工作）
  * [AnyDesk](https://anydesk.com) -  3 台设备免费，会话数量和时长不受限制
  * [Getscreen.me](https://getscreen.me) -  2 台设备免费，会话数量和时长不受限制
  * [RemSupp](https://remsupp.com) - 按需支持和对设备的永久访问（每天免费 2 个会话）
  * [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！

**[⬆️ 返回顶部](#目录)**

## 其他免费资源（Other Free Resources）

  * [get.localhost.direct](https://get.localhost.direct) - 更好的 `*.localhost.direct` 通配符公共 CA 签名 SSL 证书，用于 localhost 开发，支持子域名
  * [GitHub Education](https://education.github.com/pack) - 面向学生的免费服务合集。需要注册。
  * [Glob tester](https://globster.xyz/) - 一个允许你设计和测试 glob 模式的网站。还提供学习 glob 模式的资源。
  * [Killer Coda](https://killercoda.com/) -  浏览器中的交互式演练场，用于学习 Linux、Kubernetes、容器、编程、DevOps、网络
  * [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program) - 获取构建 Microsoft 365 平台解决方案所需的免费沙盒、工具和其他资源。该订阅为 90 天的 [Microsoft 365 E5 订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含 Windows），可续期。如果你积极进行开发（通过遥测数据和算法衡量），即可续期。
  * [MySQL Visual Explain](https://mysqlexplain.com) - 易懂且免费的 MySQL EXPLAIN 输出可视化工具，用于优化慢查询。
  * [RedHat for Developers](https://developers.redhat.com) - 开发者专享 Red Hat 产品免费访问，包括 RHEL、OpenShift、CodeReady 等。仅限个人套餐。还提供免费电子书供参考。
  * [sandbox.httpsms.com](https://sandbox.httpsms.com) - 免费发送和接收测试 SMS 消息。
  * [SimpleBackups.com](https://simplebackups.com/) - 服务器和数据库（MySQL、PostgreSQL、MongoDB）备份自动化服务，直接存储到云存储提供商（AWS、DigitalOcean 和 Backblaze）。提供含 1 次备份的免费套餐。
  * [SimpleRestore](https://simplerestore.io) - 无忧的 MySQL 备份恢复。无需代码或服务器即可将 MySQL 备份恢复到任何远程数据库。
  * [SnapShooter](https://snapshooter.com/) - 面向 DigitalOcean、AWS、LightSail、Hetzner 和 Exoscale 的备份解决方案，支持将数据库、文件系统和应用程序直接备份到基于 s3 的存储。提供免费套餐，每天为一个资源备份。

**[⬆️ 返回顶部](#目录)**
