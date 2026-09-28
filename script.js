let templates = [
    {
        id: 1,
        title: "القالب التنفيذي Executive ATS",
        badge: "الأكثر طلباً ⭐",
        badgeClass: "",
        type: "executive",
        price: 49,
        desc: "تصميم نقي وخالٍ من التعقيدات لمديري المشاريع والتقنية لاجتياز الفرز الآلي بنجاح.",
        fullDesc: "تصميم تنفيذي يركز على إبراز الإنجازات القيادية وإدارة الميزانيات والمشاريع الكبرى.",
        features: ["متوافق 100% مع أنظمة ATS", "تسليم فوري بصيغة Word"]
    },
    {
        id: 2,
        title: "قالب المطورين ومهندسي IT",
        badge: "مخصص لـ IT 💻",
        badgeClass: "tech-badge",
        type: "dev",
        price: 39,
        desc: "مخصص لتقنية المعلومات، هندسة البرمجيات، والأمن السيبراني، يبرز المهارات التقنية.",
        fullDesc: "مصمم خصيصاً لإبراز اللغات البرمجية، الأطر التقنية، والمشاريع السحابية بنظام يسهل قراءته آلياً.",
        features: ["مخصص للمبرمجين والتقنيين", "تسليم فوري بصيغة Word"]
    },
    {
        id: 3,
        title: "القالب المودرن المتوازن",
        badge: "أنيق ومرن 🎨",
        badgeClass: "modern-badge",
        type: "modern",
        price: 29,
        desc: "تصميم احترافي يجمع بين الأناقة والوضوح، مناسب للتخصصات الإدارية والمالية.",
        fullDesc: "قالب انسيابي يعتمد على تنسيق بصري مريح يناسب الإداريين، المحاسبين، وموظفي خدمة العملاء والمبيعات.",
        features: ["ألوان احترافية هادئة", "تسليم فوري بصيغة Word"]
    }
];

let coupons = [
    { code: "ZAI2026", discount: 20 },
    { code: "YZAN", discount: 15 }
];

let cart = [];
let appliedDiscount = 0;

window.onload = function() {
    renderStore();
};

function promptAdminLogin(element) {
    let password = prompt("الرجاء إدخال رمز المرور الخاص ببوابة المالك:");
    if (password === "1234") {
        switchTool('admin', element);
    } else if (password !== null) {
        alert("رمز المرور غير صحيح!");
    }
}

function switchTool(toolKey, element) {
    document.querySelectorAll('.menu-item').forEach(btn => btn.classList.remove('active'));
    if (element) element.classList.add('active');

    const titleEl = document.getElementById('activeToolTitle');
    const descEl = document.getElementById('activeToolDesc');
    const tagEl = document.getElementById('toolCategoryTag');
    const contentArea = document.getElementById('dynamicContentArea');

    if (toolKey === 'store') {
        tagEl.innerText = "متجر القوالب الاحترافية";
        titleEl.innerText = "قوالب السيرة الذاتية المعتمدة";
        descEl.innerText = "اختر قالبك المهني المصمم خصيصاً لاجتياز أنظمة الفرز الآلي (ATS). عند الشراء، سيتم تجهيز الملف فوراً بصيغة Word مع إمكانية طلب مراجعة خبرائنا.";
        renderStore();
    } else if (toolKey === 'admin') {
        tagEl.innerText = "بوابة الإدارة العليا";
        titleEl.innerText = "لوحة تحكم المالك (إدارة القوالب والأسعار والكوبونات)";
        descEl.innerText = "من هنا يمكنك التحكم الكامل بمتجرك: إضافة قوالب جديدة، تعديل الأسعار، وإدارة أكواد الخصم.";
        renderAdminPanel();
    } else if (toolKey === 'privacy') {
        tagEl.innerText = "السياسات والشفافية";
        titleEl.innerText = "سياسة الخصوصية لمنصة ZaiHub";
        descEl.innerText = "نلتزم بحماية بياناتك الشخصية ونوضح لك بدقة كيف نتعامل مع المعلومات والملفات التعريفية (Cookies) وإعلانات قوقل.";
        renderPrivacyPage();
    } else if (toolKey === 'terms') {
        tagEl.innerText = "الشروط والأحكام";
        titleEl.innerText = "شروط الاستخدام وسياسة الاسترجاع";
        descEl.innerText = "القواعد والبنود المنظمة لاستخدام خدمات وقوالب منصة ZaiHub الرقمية، بما في ذلك سياسة الاسترجاع واسترداد الأموال للمنتجات الرقمية.";
        renderTermsPage();
    } else if (toolKey === 'contact') {
        tagEl.innerText = "الدعم الفني والاتصال";
        titleEl.innerText = "اتصل بنا";
        descEl.innerText = "فريق دعم ZaiHub جاهز للإجابة على استفساراتك وتقديم الدعم الفني على مدار الساعة.";
        renderContactPage();
    } else {
        renderAIToolWorkspace(toolKey, titleEl, descEl, tagEl, contentArea);
    }
}

function renderStore() {
    const contentArea = document.getElementById('dynamicContentArea');
    let html = '<div class="templates-grid">';
    
    templates.forEach(tpl => {
        html += `
            <div class="template-card">
                <div class="template-badge ${tpl.badgeClass}">${tpl.badge}</div>
                <div class="template-preview ${tpl.type}">
                    <div class="cv-mockup-doc">
                        <div class="mockup-line title"></div>
                        <div class="mockup-line text w-80"></div>
                        <div class="mockup-line text w-60"></div>
                        <div class="mockup-line subtitle"></div>
                        <div class="mockup-line text w-90"></div>
                    </div>
                </div>
                <div class="template-body">
                    <div class="template-title">${tpl.title}</div>
                    <div class="template-desc">${tpl.desc}</div>
                    <div class="template-features">
                        <span><i class="fa-solid fa-check"></i> ${tpl.features[0]}</span>
                        <span><i class="fa-solid fa-check"></i> ${tpl.features[1]}</span>
                    </div>
                    <div class="template-footer">
                        <span class="template-price">${tpl.price} ر.س</span>
                        <div class="template-actions">
                            <button class="btn-preview" onclick="previewTemplate('${tpl.title}', '${tpl.fullDesc}')">معاينة</button>
                            <button class="btn-buy" onclick="addToCart('${tpl.title}', ${tpl.price})">أضف للسلة</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    contentArea.innerHTML = html;
}

function renderPrivacyPage() {
    const contentArea = document.getElementById('dynamicContentArea');
    contentArea.innerHTML = `
        <div class="policy-card">
            <h2>1. مقدمة عن سياسة الخصوصية</h2>
            <p>في منصة <b>ZaiHub</b> (المشار إليها فيما يلي بـ "نحن" أو "المنصة"), نعتبر خصوصية زوارنا ومستخدمينا أمراً في غاية الأهمية. توضح وثيقة سياسة الخصوصية هذه أنواع المعلومات الشخصية التي يتم جمعها وكيفية استخدامها وحمايتها.</p>
            
            <h2>2. ملفات تعريف الارتباط (Google AdSense & Cookies)</h2>
            <p>نحن نستخدم شركات إعلانات خارجية (مثل Google AdSense) لعرض الإعلانات عندما تزور موقعنا. قد تستخدم هذه الشركات معلومات حول زيارتك لهذا الموقع ومواقع أخرى (باستثناء الاسم، العنوان، عنوان البريد الإلكتروني، أو رقم الهاتف) لتقديم إعلانات حول السلع والخدمات التي تهمك.</p>
            <ul>
                <li>تستخدم شركة Google بصفتها بائعاً خارجياً ملفات تعريف الارتباط (DART) لعرض الإعلانات على موقعنا.</li>
                <li>يمكن للمستخدمين إلغاء استخدام ملفات تعريف الارتباط DART بزيارة سياسة الخصوصية الخاصة بإعلانات Google وشبكة المحتوى.</li>
            </ul>

            <h2>3. البيانات التي نجمعها</h2>
            <p>عند استخدامك لمنصة ZaiHub أو أدواتنا، قد نقوم بجمع معلومات تواصل أساسية (مثل البريد الإلكتروني في حال التواصل أو إتمام الطلبات) لتحسين جودة الخدمات وتوفير الدعم الفني المطلوب.</p>

            <h2>4. موافقتك</h2>
            <p>باستخدامك لموقعنا، فإنك توافق على سياسة الخصوصية الخاصة بنا وتوافق على شروطها والأحكام العامة.</p>
        </div>
    `;
}

function renderTermsPage() {
    const contentArea = document.getElementById('dynamicContentArea');
    contentArea.innerHTML = `
        <div class="policy-card">
            <h2>1. قبول الشروط</h2>
            <p>الوصول إلى واستخدام منصة <b>ZaiHub</b> يخضع لشروط الاستخدام هذه. من خلال تصفحك أو استخدامك للموقع، فإنك توافق على الالتزام بهذه الشروط بالكامل.</p>

            <h2>2. حقوق الملكية الفكرية</h2>
            <p>جميع القوالب، النصوص، الأكواد البرمجية، والتصاميم المعروضة في المنصة هي ملكية حصرية لـ ZaiHub ومحمية بموجب حقوق النشر. لا يحق إعادة بيعها أو توزيعها دون إذن خطي مسبق.</p>

            <h2>3. سياسة الاسترجاع واسترداد الأموال (Refund Policy)</h2>
            <p>نظراً لأن المنتجات والمعروضات الرقمية (مثل قوالب السيرة الذاتية والملفات الجاهزة للتحميل والتسليم الفوري) تتميز بطبيعتها غير القابلة للاسترداد الفعلي بعد المعاينة أو التحميل أو التوصيل الإلكتروني:</p>
            <ul>
                <li><b>جميع المشتريات والمدفوعات الخاصة بالقوالب أو الخدمات الرقمية نهائية وغير قابلة للاسترداد (Non-refundable) كلياً أو جزئياً</b> بعد إتمام عملية الشراء وتحميل الملف أو استلامه.</li>
                <li>يتحمل المستخدم مسؤولية التأكد من ملاءمة المنتج لاحتياجاته قبل إتمام عملية الدفع.</li>
            </ul>

            <h2>4. حدود المسؤولية</h2>
            <p>نسعى دائماً لتقديم أدوات وقوالب دقيقة ومطابقة لمعايير أنظمة الفرز الآلي (ATS)، ولكننا لا نتحمل المسؤولية القانونية المباشرة عن نتائج التوظيف الشخصية لكل مستخدم.</p>
        </div>
    `;
}

function renderContactPage() {
    const contentArea = document.getElementById('dynamicContentArea');
    contentArea.innerHTML = `
        <div class="card">
            <h3><i class="fa-solid fa-paper-plane"></i> أرسل لنا رسالة مباشرة</h3>
            <div class="input-group">
                <label><i class="fa-solid fa-user"></i> الاسم الكامل</label>
                <input type="text" id="contactName" placeholder="أدخل اسمك هنا...">
            </div>
            <div class="input-group">
                <label><i class="fa-solid fa-envelope"></i> البريد الإلكتروني</label>
                <input type="text" id="contactEmail" placeholder="example@domain.com">
            </div>
            <div class="input-group">
                <label><i class="fa-solid fa-message"></i> نص الرسالة أو الاستفسار</label>
                <textarea id="contactMsg" rows="5" placeholder="اكتب استفسارك بالتفصيل وسنرد عليك قريباً..."></textarea>
            </div>
            <button class="btn-primary" onclick="submitContactForm()"><i class="fa-solid fa-circle-check"></i> إرسال الرسالة</button>
        </div>
    `;
}

function submitContactForm() {
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const msg = document.getElementById('contactMsg').value;

    if (!name || !email || !msg) {
        alert('الرجاء تعبئة جميع الحقول قبل إرسال الرسالة.');
        return;
    }
    alert('شكراً لتواصلك معنا يا يزن! تم إرسال رسالتك بنجاح وسنرد عليك قريباً عبر البريد الإلكتروني.');
    switchTool('store', document.querySelector('.store-link'));
}

function renderAdminPanel() {
    const contentArea = document.getElementById('dynamicContentArea');
    let html = `
        <div class="card">
            <h3><i class="fa-solid fa-tags"></i> تعديل أسعار وإدارة القوالب الحالية</h3>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>اسم القالب</th>
                        <th>السعر (ر.س)</th>
                        <th>الإجراء</th>
                    </tr>
                </thead>
                <tbody>
    `;

    templates.forEach(tpl => {
        html += `
            <tr>
                <td><b>${tpl.title}</b></td>
                <td>
                    <input type="number" class="table-price-input" id="price_${tpl.id}" value="${tpl.price}" onchange="updateTemplatePrice(${tpl.id}, this.value)"> ر.س
                </td>
                <td><button class="btn-delete-admin" onclick="deleteTemplate(${tpl.id})"><i class="fa-solid fa-trash"></i> حذف</button></td>
            </tr>
        `;
    });

    html += `
                </tbody>
            </table>
        </div>

        <div class="card" style="margin-top: 20px;">
            <h3><i class="fa-solid fa-plus-circle"></i> إضافة قالب جديد للمتجر</h3>
            <div class="input-group">
                <label><i class="fa-solid fa-heading"></i> عنوان القالب</label>
                <input type="text" id="newTitle" placeholder="مثال: قالب التسويق الرقمي">
            </div>
            <div class="input-group">
                <label><i class="fa-solid fa-tag"></i> السعر (ر.س)</label>
                <input type="number" id="newPrice" placeholder="مثال: 45">
            </div>
            <div class="input-group">
                <label><i class="fa-solid fa-align-right"></i> الوصف المختصر</label>
                <textarea id="newDesc" rows="2" placeholder="وصف قصير يظهر في بطاقة القالب..."></textarea>
            </div>
            <button class="btn-primary" onclick="addNewTemplate()"><i class="fa-solid fa-cloud-arrow-up"></i> نشر القالب في المتجر</button>
        </div>

        <div class="card" style="margin-top: 20px;">
            <h3><i class="fa-solid fa-ticket"></i> إدارة أكواد الخصم</h3>
            <div style="display: flex; gap: 10px;">
                <input type="text" id="newCouponCode" placeholder="أدخل كود الخصم (مثل: VIP50)" style="flex: 2; padding: 12px; border: 1px solid var(--border-color); border-radius: 8px;">
                <input type="number" id="newCouponDiscount" placeholder="نسبة الخصم %" style="flex: 1; padding: 12px; border: 1px solid var(--border-color); border-radius: 8px;">
                <button class="btn-primary" onclick="addNewCoupon()" style="padding: 10px 20px;"><i class="fa-solid fa-plus"></i> إضافة كود</button>
            </div>

            <table class="admin-table" style="margin-top: 15px;">
                <thead>
                    <tr>
                        <th>كود الخصم</th>
                        <th>نسبة الخصم</th>
                        <th>الإجراء</th>
                    </tr>
                </thead>
                <tbody>
    `;

    coupons.forEach((c, index) => {
        html += `
            <tr>
                <td><b>${c.code}</b></td>
                <td>${c.discount}%</td>
                <td><button class="btn-delete-admin" onclick="deleteCoupon(${index})"><i class="fa-solid fa-trash"></i> حذف</button></td>
            </tr>
        `;
    });

    html += `
                </tbody>
            </table>
        </div>
    `;

    contentArea.innerHTML = html;
}

function updateTemplatePrice(id, newPrice) {
    let tpl = templates.find(t => t.id === id);
    if (tpl) {
        tpl.price = parseFloat(newPrice) || 0;
        alert(`تم تحديث سعر "${tpl.title}" إلى ${tpl.price} ر.س بنجاح!`);
    }
}

function addNewTemplate() {
    const title = document.getElementById('newTitle').value;
    const price = parseFloat(document.getElementById('newPrice').value);
    const desc = document.getElementById('newDesc').value;

    if (!title || isNaN(price) || !desc) {
        alert('الرجاء تعبئة كافة الحقول بشكل صحيح.');
        return;
    }

    templates.push({
        id: Date.now(),
        title: title,
        badge: "جديد 🚀",
        badgeClass: "",
        type: "executive",
        price: price,
        desc: desc,
        fullDesc: desc,
        features: ["متوافق مع أنظمة ATS", "تسليم فوري بصيغة Word"]
    });

    alert('تم إضافة القالب بنجاح إلى المتجر!');
    renderAdminPanel();
}

function deleteTemplate(id) {
    templates = templates.filter(t => t.id !== id);
    renderAdminPanel();
}

function addNewCoupon() {
    const code = document.getElementById('newCouponCode').value.trim().toUpperCase();
    const discount = parseInt(document.getElementById('newCouponDiscount').value);

    if (!code || isNaN(discount) || discount <= 0 || discount > 100) {
        alert('الرجاء إدخال كود صحيح ونسبة خصم بين 1 و 100.');
        return;
    }

    coupons.push({ code, discount });
    alert(`تم إضافة كود الخصم (${code}) بنسبة (${discount}%) بنجاح!`);
    renderAdminPanel();
}

function deleteCoupon(index) {
    coupons.splice(index, 1);
    renderAdminPanel();
}

function applyCoupon() {
    const inputCode = document.getElementById('couponInput').value.trim().toUpperCase();
    const msg = document.getElementById('couponMsg');

    let foundCoupon = coupons.find(c => c.code === inputCode);

    if (foundCoupon) {
        appliedDiscount = foundCoupon.discount;
        msg.style.color = 'var(--success)';
        msg.innerText = `تم تطبيق كود الخصم بنجاح (${appliedDiscount}%)!`;
        renderCartItems();
    } else {
        appliedDiscount = 0;
        msg.style.color = '#dc2626';
        msg.innerText = 'كود الخصم غير صحيح أو منتهي الصلاحية.';
        renderCartItems();
    }
}

function renderAIToolWorkspace(key, titleEl, descEl, tagEl, contentArea) {
    let titles = {
        'writer': ["صانع النصوص الذكي", "توليد المقالات والمحتوى الاحترافي", "أدوات الكتابة وصياغة المحتوى"],
        'rewriter': ["إعادة صياغة النصوص", "تطوير وتحسين الأسلوب اللغوي للنصوص", "أدوات الكتابة وصياغة المحتوى"],
        'summarizer': ["تلخيص المقالات والتقارير", "استخلاص الأفكار الرئيسية بدقة عالية", "أدوات الكتابة وصياغة المحتوى"],
        'email': ["صياغة الإيميلات الرسمية", "كتابة خطابات ومراسلات الشركات باحترافية", "أدوات الكتابة وصياغة المحتوى"],
        'cv': ["منشئ السيرة الذاتية الذكي", "بناء محتوى احترافي متكامل لسيرتك الذاتية", "أدوات الكتابة وصياغة المحتوى"],
        'grammar': ["التدقيق اللغوي والنحوي", "تصحيح الأخطاء الإملائية والنحوية فوراً", "أدوات الكتابة وصياغة المحتوى"],
        'social': ["منشورات وسائل التواصل الاجتماعي", "صياغة تغريدات ومنشورات جذابة ومؤثرة", "التسويق والسوشيال ميديا"],
        'product': ["وصف المنتجات التجاري", "كتابة إعلانات تسويقية جاذبة للمتاجر الإلكترونية", "التسويق والسوشيال ميديا"],
        'quiz': ["منشئ الاختبارات والأسئلة", "توليد أسئلة تقييم واختبارات تعليمية ذكية", "التعليم والأعمال"],
        'biz': ["مقترح أفكار المشاريع", "ابتكار أفكار ريادية ودراسات جدوى مصغرة", "التعليم والأعمال"]
    };

    if (titles[key]) {
        titleEl.innerText = titles[key][0];
        descEl.innerText = titles[key][1];
        tagEl.innerText = titles[key][2];

        contentArea.innerHTML = `
            <div class="card">
                <div class="input-group">
                    <label><i class="fa-solid fa-pen"></i> أدخل النص أو المعطيات المطلوبة:</label>
                    <textarea id="aiInput" rows="5" placeholder="اكتب التفاصيل هنا..."></textarea>
                </div>
                <button class="btn-primary" onclick="runAITool()"><i class="fa-solid fa-wand-magic-sparkles"></i> تنفيذ الأداة بالذكاء الاصطناعي</button>
                
                <div class="output-wrapper">
                    <div class="output-header">
                        <span>النتيجة المولدة:</span>
                        <button class="btn-copy" onclick="copyOutput()"><i class="fa-solid fa-copy"></i> نسخ النص</button>
                    </div>
                    <div class="output-box" id="aiOutput">النتيجة ستظهر هنا فور إتمام المعالجة...</div>
                </div>
            </div>
        `;
    }
}

function runAITool() {
    const input = document.getElementById('aiInput').value;
    const outputBox = document.getElementById('aiOutput');
    if (!input.trim()) {
        alert('الرجاء إدخال نص أولاً.');
        return;
    }
    outputBox.innerText = "جاري المعالجة بواسطة الذكاء الاصطناعي...";
    setTimeout(() => {
        outputBox.innerText = `تمت المعالجة بنجاح:\n\n- بناءً على مدخلاتك: "${input}"\n- النتيجة: تم صياغة وتحسين المحتوى بشكل احترافي وجاهز للاستخدام المباشر في مجالك المستهدف.`;
    }, 1000);
}

function copyOutput() {
    const text = document.getElementById('aiOutput').innerText;
    navigator.clipboard.writeText(text);
    alert('تم نسخ النتيجة إلى الحافظة بنجاح!');
}

function previewTemplate(title, desc) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('modalAddBtn').setAttribute('onclick', `addToCart('${title}', 49); closePreviewModal();`);
    document.getElementById('previewModal').style.display = 'flex';
}

function closePreviewModal() {
    document.getElementById('previewModal').style.display = 'none';
}

function toggleCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        renderCartItems();
        modal.style.display = 'flex';
    }
}

function addToCart(title, price) {
    cart.push({ title, price });
    updateCartBadge();
    alert(`تمت إضافة "${title}" إلى السلة بنجاح!`);
}

function updateCartBadge() {
    document.getElementById('cartCount').innerText = cart.length;
}

function renderCartItems() {
    const container = document.getElementById('cartItemsContainer');
    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-cart-text">سلة المشتريات فارغة حالياً.</div>';
        document.getElementById('subtotalPrice').innerText = '0 ر.س';
        document.getElementById('finalPrice').innerText = '0 ر.س';
        document.getElementById('discountRow').style.display = 'none';
        return;
    }

    let html = '';
    let subtotal = 0;

    cart.forEach((item, index) => {
        subtotal += item.price;
        html += `
            <div class="cart-item-row">
                <div class="cart-item-info">
                    <span>${item.title}</span>
                    <span>${item.price} ر.س</span>
                </div>
                <div class="cart-item-actions">
                    <button onclick="removeFromCart(${index})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

    let discountAmount = (subtotal * appliedDiscount) / 100;
    let finalTotal = subtotal - discountAmount;

    document.getElementById('subtotalPrice').innerText = subtotal + ' ر.س';
    if (appliedDiscount > 0) {
        document.getElementById('discountRow').style.display = 'flex';
        document.getElementById('discountPrice').innerText = '-' + discountAmount + ' ر.س';
    } else {
        document.getElementById('discountRow').style.display = 'none';
    }
    document.getElementById('finalPrice').innerText = finalTotal + ' ر.س';
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartBadge();
    renderCartItems();
}

function checkoutCart() {
    if (cart.length === 0) {
        alert('سلة المشتريات فارغة!');
        return;
    }
    alert('شكراً لك! تم توجيهك إلى بوابة الدفع الآمن بنجاح.');
    cart = [];
    appliedDiscount = 0;
    updateCartBadge();
    toggleCartModal();
    switchTool('store', document.querySelector('.store-link'));
}