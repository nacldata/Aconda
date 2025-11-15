
import React from "react";

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const App = () => {
  return (
    <div className="page">
      <header className="header">
        <div className="header-inner">
          <div className="brand" onClick={() => scrollToId("home")}>
            <div className="brand-mark animate-spin-soft">A</div>
            <div className="brand-text">
              <span className="brand-cn">阿康达</span>
              <span className="brand-en">Aconda HealthTech</span>
            </div>
          </div>
          <nav className="nav">
            <button onClick={() => scrollToId("home")}>首页</button>
            <button onClick={() => scrollToId("story")}>品牌</button>
            <button onClick={() => scrollToId("first")}>首创</button>
            <button onClick={() => scrollToId("scenes")}>场景</button>
            <button onClick={() => scrollToId("platform")}>平台</button>
            <button onClick={() => scrollToId("contact")}>联系</button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="hero fade-in">
          <div className="hero-grid">
            <div className="hero-left">
              <div className="hero-pill">
                中医 × AI · AI 穴位识别 & 经络导航 · First in World
              </div>
              <h1>
                让 AI 做中医的
                <span className="hero-highlight"> 科技翻译官</span>
              </h1>
              <p className="hero-lead">
                一部手机，对准不适部位，AI 自动识别区域、显示穴位、给出按压节奏与调理建议。
              </p>
              <p className="hero-sub">
                不再需要记一堆穴位名字。看得见的经络，跟得上的指导。中医第一次，被装进一套高科技导航系统。
              </p>
              <div className="hero-actions">
                <a href="#first" className="btn primary">
                  看行业首创 · 3 个突破
                </a>
                <a href="#scenes" className="btn ghost">
                  了解 B2B / B2C / B2G 方案
                </a>
              </div>
              <div className="hero-stats">
                <div>
                  <span className="stat-number">5,000+</span>
                  <span className="stat-label">年中医经络知识</span>
                </div>
                <div>
                  <span className="stat-number">3</span>
                  <span className="stat-label">大核心引擎</span>
                </div>
                <div>
                  <span className="stat-number">1</span>
                  <span className="stat-label">个 AI 健康操作系统</span>
                </div>
              </div>
            </div>
            <div className="hero-right">
              <div className="device-card lift">
                <div className="device-header">
                  <span>肩颈不适 · 实时识别</span>
                  <span className="badge">Live Demo · Mock</span>
                </div>
                <div className="device-screen">
                  <div className="device-body">
                    <div className="device-figure" />
                    <div className="meridian-line line-left" />
                    <div className="meridian-line line-right" />
                    <div className="pulse-dot dot-1">
                      <span>风池</span>
                    </div>
                    <div className="pulse-dot dot-2">
                      <span>肩井</span>
                    </div>
                    <div className="pulse-dot dot-3">
                      <span>天宗</span>
                    </div>
                  </div>
                  <div className="device-info">
                    <div className="info-row">
                      <span className="info-label">识别区域</span>
                      <span className="info-value">颈项 / 肩部 / 上背</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">建议穴位</span>
                      <span className="info-value">风池 · 肩井 · 天宗</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">操作建议</span>
                      <span className="info-value">每日 1–2 次 · 每次 3–5 分钟</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-mini-grid">
                <div className="mini-card">
                  <p className="mini-title">Ancient Wisdom · New Interface</p>
                  <p className="mini-text">
                    保留中医经络体系，用界面、动效和 AI 推理重塑体验。
                  </p>
                </div>
                <div className="mini-card">
                  <p className="mini-title">Not App, but OS</p>
                  <p className="mini-text">
                    VitaOne 是身体的健康操作系统，而不是又一个“内容 App”。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story (简化+留白) */}
        <section id="story" className="section fade-in-delayed">
          <div className="section-inner">
            <div className="section-header">
              <h2>品牌 · 来自一句古话</h2>
              <p>
                “但愿世间人无病，宁可架上药生尘。”
                阿康达从这句古话出发，用科技做一件很简单的事：
              </p>
            </div>
            <div className="columns-2">
              <div className="story-block">
                <h3>我们做什么？</h3>
                <ul>
                  <li>把经络与穴位，变成屏幕上清晰的动态导航。</li>
                  <li>把难记的理论，变成通俗可执行的小步骤。</li>
                  <li>把一次性咨询，变成长期陪伴的 AI 健康体。</li>
                </ul>
              </div>
              <div className="story-block">
                <h3>我们不做什么？</h3>
                <ul>
                  <li>不做“吓人式”营销，不放大焦虑。</li>
                  <li>不替代医生，不做诊断，不夸大功效。</li>
                  <li>不把中医变成噱头，而是认真做底层工程。</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* First in World */}
        <section id="first" className="section section-dark fade-in">
          <div className="section-inner">
            <div className="section-header center">
              <p className="eyebrow">First in World</p>
              <h2>全球首个 · AI 穴位识别与经络导航系统</h2>
              <p>
                三个核心突破，把经典经络图谱，变成真正可交互、可教学、可落地的技术系统。
              </p>
            </div>
            <div className="three-cards">
              <div className="first-card glass lift">
                <h3>01 · AI 穴位识别</h3>
                <p>识别身体区域 → 对齐三维人体模型 → 精准标出主要穴位。</p>
                <ul>
                  <li>支持基础站姿 / 坐姿</li>
                  <li>适配多种体型轮廓</li>
                  <li>可做教学模式与演示模式</li>
                </ul>
              </div>
              <div className="first-card glass lift">
                <h3>02 · 经络路径智能推断</h3>
                <p>把“经络走向”变成动态线条，用动效展示运行方向与关联关系。</p>
                <ul>
                  <li>支持单条经络高亮</li>
                  <li>支持多经络叠加对比</li>
                  <li>适合课堂 / 展馆 / App 演示</li>
                </ul>
              </div>
              <div className="first-card glass lift">
                <h3>03 · AI 调理处方建议</h3>
                <p>结合体感描述、作息、饮食等，生成温和可行的日常调理建议。</p>
                <ul>
                  <li>按压节奏与时长建议</li>
                  <li>配合拉伸 / 热敷 / 理疗贴</li>
                  <li>边界清晰：不诊断，只调理</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Scenes */}
        <section id="scenes" className="section fade-in-delayed">
          <div className="section-inner">
            <div className="section-header">
              <h2>三大落地场景 · 从一间馆，到一个城市</h2>
              <p>我们不是只做一个 App，而是为机构、家庭与城市提供一整套中医数字基座。</p>
            </div>
            <div className="scene-layout">
              <div className="scene-card lift">
                <div className="scene-tag">B2B</div>
                <h3>中医馆 / 医院 / 养生机构</h3>
                <ul>
                  <li>AI 穴位识别 & 经络导航 SaaS / SDK</li>
                  <li>新人培训 · 穴位教学 · 项目标准化</li>
                  <li>AI+可视化健康报告，增强用户信任</li>
                  <li>多门店一致服务体验</li>
                </ul>
              </div>
              <div className="scene-card lift">
                <div className="scene-tag">B2C</div>
                <h3>全球家庭 · 居家保健</h3>
                <ul>
                  <li>哪里不舒服，举起手机就能找穴位</li>
                  <li>配合 Aconda 护肤 / 女性健康 / 理疗产品</li>
                  <li>长期跟踪身体趋势而不是一次性建议</li>
                </ul>
              </div>
              <div className="scene-card lift">
                <div className="scene-tag">B2G</div>
                <h3>中医教育 & 一带一路输出</h3>
                <ul>
                  <li>中英文对照的数字经络教材</li>
                  <li>数字展馆 / 城市中医形象工程</li>
                  <li>适配海外课堂的可视化课程</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Platform */}
        <section id="platform" className="section section-soft fade-in">
          <div className="section-inner">
            <div className="section-header">
              <h2>VitaOne · 身体的 AI 健康操作系统</h2>
              <p>一个入口，串起饮食、皮肤、经期、睡眠、中医保健与产品闭环。</p>
            </div>
            <div className="platform-grid">
              <div className="platform-card lift">
                <h3>AI 健康对话</h3>
                <p>理解“你最近怎么了”，而不是只回答“你问了什么”。</p>
                <ul>
                  <li>生活方式分析</li>
                  <li>体感 + 数据的综合判断</li>
                  <li>长期陪伴而非单次问答</li>
                </ul>
              </div>
              <div className="platform-card lift">
                <h3>FoodScan 饮食识别</h3>
                <p>一拍菜品，看到今天的营养结构与热量大致分布。</p>
                <ul>
                  <li>多菜品识别</li>
                  <li>碳水 / 蛋白 / 脂肪结构分析</li>
                  <li>与体重 /皮肤状态联动</li>
                </ul>
              </div>
              <div className="platform-card lift">
                <h3>SkinAI 皮肤健康</h3>
                <p>针对痘痘、敏感、干燥等问题做温和分析与修护建议。</p>
                <ul>
                  <li>状态判读 + 可能诱因</li>
                  <li>护肤节奏建议</li>
                  <li>与 Aconda 护肤产品联动</li>
                </ul>
              </div>
              <div className="platform-card lift">
                <h3>FemCare AI 女性健康</h3>
                <p>从经期出发，关注疼痛、情绪、睡眠与营养。</p>
                <ul>
                  <li>周期预测与温柔提醒</li>
                  <li>穴位 + 生活方式建议</li>
                  <li>卫生巾 / 暖宫贴 / 营养品联动</li>
                </ul>
              </div>
              <div className="platform-card lift">
                <h3>健康报告引擎</h3>
                <p>自动生成日 / 周 / 月健康报告，看见趋势，而不是只看当天。</p>
                <ul>
                  <li>饮食 / 睡眠 / 皮肤趋势</li>
                  <li>身体不适热力图</li>
                  <li>中长期改善建议</li>
                </ul>
              </div>
              <div className="platform-card lift">
                <h3>产品 & 服务闭环</h3>
                <p>从“分析”到“行动”，再到“反馈”，形成可优化闭环。</p>
                <ul>
                  <li>健康方案一键匹配产品组合</li>
                  <li>复购与依从性分析</li>
                  <li>反哺模型迭代</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section fade-in-delayed">
          <div className="section-inner">
            <div className="section-header center">
              <h2>一起把“精准中医”做成基础设施</h2>
              <p>如果你在做中医、健康、教育、城市品牌或出海项目，欢迎和 Aconda 聊聊。</p>
            </div>
            <div className="contact-grid">
              <div className="contact-card">
                <h3>商务合作 · B2B / B2G</h3>
                <p>方向：中医馆 / 医院 / 养生机构 / 教育 / 展馆 / 一带一路。</p>
                <p>邮箱：business@aconda.hk（示例，可替换）。</p>
              </div>
              <div className="contact-card">
                <h3>品牌 & 产品合作</h3>
                <p>联合开发中医相关产品、健康用品、国际渠道与联名项目。</p>
              </div>
              <div className="contact-card">
                <h3>媒体 & 故事</h3>
                <p>欢迎纪录片、媒体、创作者一起讲述“AI × 中医”的故事。</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">
            <span>阿康达 · Aconda HealthTech</span>
            <span className="footer-sub">
              官方域名：aconda.hk ｜ 平台域名：vitaone.ai
            </span>
          </div>
          <div className="footer-right">
            © {new Date().getFullYear()} Aconda. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
