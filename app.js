/* ============================================
   EcoTask - ICIA Titanium Edition
   JavaScript - SPA Navigation, AI Logic, Data Visualization & I18n
   ============================================ */

const Translations = {
    vi: {
        nav_home: "Trang chủ",
        nav_scan: "Quét AI",
        nav_stats: "Thống kê",
        nav_wiki: "Hướng dẫn",
        nav_rewards: "Đổi quà",
        hero_badge: "AI Hỗ Trợ Tái Chế",
        hero_title: "Biến rác thải thành <span class='text-gradient'>tài nguyên</span>",
        hero_desc: "Sử dụng trí tuệ nhân tạo (AI) để phân loại rác và theo dõi tác động môi trường của toàn trường.",
        btn_scan: "Quét rác ngay (AI)",
        btn_stats: "Xem thống kê",
        feat_scan_title: "Nhận diện AI",
        feat_scan_desc: "Phân loại rác tự động chỉ trong 3 giây.",
        feat_stats_title: "Theo dõi Tác động",
        feat_stats_desc: "Xem số liệu giảm thải CO2 thời gian thực.",
        feat_wiki_title: "Wiki Tái chế",
        feat_wiki_desc: "Hướng dẫn chi tiết cách xử lý từng loại rác.",
        feat_rewards_title: "Đổi quà & Phần thưởng",
        feat_rewards_desc: "Dùng Green Token trao đổi ưu đãi từ nhà trường.",
        scanner_title: "AI Waste Scanner",
        upload_title: "Chụp ảnh hoặc tải lên",
        upload_desc: "AI sẽ tự động phân loại rác giúp bạn",
        btn_camera: "Mở Camera",
        btn_upload: "Chọn từ máy",
        scanner_tip: "Trên điện thoại: nhấn <b>Mở Camera</b> để chụp trực tiếp. Trên máy tính: đặt tên file chứa từ khóa (vd: chai-nhua.jpg).",
        result_title: "Kết quả phân tích AI",
        confidence: "Độ chính xác:",
        btn_confirm: "Xác nhận đã tái chế",
        btn_rescan: "Quét lại",
        dashboard_title: "Thống kê Tác động",
        dashboard_subtitle: "Dữ liệu thực tế từ toàn trường",
        filter_class: "Lớp",
        filter_grade: "Khối",
        filter_school: "Toàn trường",
        chart_waste_title: "Phân loại rác thải",
        chart_trend_title: "Xu hướng hàng tháng",
        stat_co2_label: "CO2 Đã giảm",
        stat_waste_label: "Rác Tái chế (kg)",
        stat_trees_label: "Cây Xanh Tương đương",
        wiki_title: "Hướng dẫn Tái chế",
        wiki_subtitle: "Tra cứu nhanh cách xử lý các loại rác phổ biến",
        tab_guides: "Cẩm nang",
        tab_videos: "Video Hướng dẫn",
        wiki_plastic: "Nhựa (Plastic)",
        wiki_plastic_desc: "Chai nước, hộp đựng thức ăn, ly nhựa, ống hút, hộp xốp.",
        wiki_plastic_do1: "Rửa sạch và để ráo",
        wiki_plastic_do2: "Bóp bẹp để tiết kiệm diện tích",
        wiki_plastic_do3: "Tách nắp chai, nhãn dán riêng",
        wiki_plastic_dont: "Không bỏ ống hút nhựa nhỏ, hộp xốp",
        wiki_plastic_fact: "🌍 1 chai PET tái chế = tiết kiệm 60% năng lượng sản xuất",
        wiki_paper: "Giấy (Paper)",
        wiki_paper_desc: "Sách báo, thùng carton, giấy in, hộp sữa.",
        wiki_paper_do1: "Giữ giấy phẳng và khô ráo",
        wiki_paper_do2: "Tháo băng keo trên thùng carton",
        wiki_paper_do3: "Xếp gọn thành chồng gọn gàng",
        wiki_paper_dont: "Không tái chế giấy dính dầu mỡ hoặc ướt",
        wiki_paper_fact: "🌍 Tái chế 1 tấn giấy = cứu 17 cây xanh khỏi bị chặt",
        wiki_metal: "Kim loại (Metal)",
        wiki_metal_desc: "Lon nước ngọt, hộp thực phẩm, nắp chai, dao cũ.",
        wiki_metal_do1: "Đổ hết chất lỏng bên trong",
        wiki_metal_do2: "Rửa sạch thực phẩm thừa",
        wiki_metal_do3: "Bóp dẹp lon nhôm nếu có thể",
        wiki_metal_dont: "Không bỏ vỏ bình xịt hóa chất",
        wiki_metal_fact: "🌍 Tái chế nhôm tiết kiệm 95% năng lượng so với sản xuất mới",
        wiki_glass: "Thủy tinh (Glass)",
        wiki_glass_desc: "Chai lọ thủy tinh, lọ jam, hủ gia vị.",
        wiki_glass_do1: "Rửa sạch, tháo nắp",
        wiki_glass_do2: "Phân loại theo màu (trong, xanh, nâu)",
        wiki_glass_do3: "Bọc kín nếu vỡ",
        wiki_glass_dont: "Không bỏ gương vỡ, bóng đèn, khóa cửa",
        wiki_glass_fact: "🌍 Thủy tinh có thể tái chế 100% vô số lần mà không giảm chất lượng",
        wiki_ewaste: "Rác điện tử (E-Waste)",
        wiki_ewaste_desc: "Pin, điện thoại cũ, dây sạc hỏng, laptop cũ.",
        wiki_ewaste_do1: "Thu gom vào hộp riêng, dán nhãn 'E-Waste'",
        wiki_ewaste_do2: "Mang đến điểm thu hồi (đặt tại trường)",
        wiki_ewaste_do3: "Xóa dữ liệu cá nhân trước khi nộp",
        wiki_ewaste_dont: "Không đập vỡ pin, không đốt rác điện tử",
        wiki_ewaste_fact: "⚠️ Rác điện tử chứa chì, thủy ngân gây hại đất và nước nghiêm trọng",
        wiki_organic: "Rác hữu cơ (Organic)",
        wiki_organic_desc: "Vỏ trái cây, rau củ, bã cà phê, cơm thừa.",
        wiki_organic_do1: "Ụ compost làm phân bón cây",
        wiki_organic_do2: "Để ráo nước trước khi ủ",
        wiki_organic_do3: "Chế biến thành khí biôga (biogas)",
        wiki_organic_dont: "Không đựng trong túi nilon khi ủ",
        wiki_organic_fact: "🌍 Rác hữu cơ chiếm 50-70% lượng rác hộ gia đình — ủ compost giúp giảm rác bãi",
        btn_login: "Đăng nhập",
        btn_logout: "Đăng xuất",
        btn_redeem: "Đổi quà",
        login_subtitle: "Vui lòng chọn loại tài khoản để đăng nhập",
        tab_student: "Học sinh",
        tab_teacher: "Giáo viên",
        label_school: "Trường",
        label_class: "Lớp",
        label_name: "Họ và tên",
        label_password: "Mật khẩu",
        label_teacher_id: "Mã Giáo viên",
        rewards_title: "Đổi quà & Phần thưởng",
        rewards_subtitle: "Dùng Green Token kiếm được để đổi lấy ưu đãi từ nhà trường",
        token_label: "Green Tokens của bạn",
        token_earn_tip: "💡 Quét rác + xác nhận tái chế để kiếm token!",
        rewards_history: "Lịch sử đổi quà",
        rewards_login_prompt: "Bạn cần đăng nhập để đổi ưu đãi"
    },
    en: {
        nav_home: "Home",
        nav_scan: "AI Scan",
        nav_stats: "Statistics",
        nav_wiki: "Guide",
        nav_rewards: "Rewards",
        hero_badge: "AI-Powered Recycling",
        hero_title: "Turn Waste into <span class='text-gradient'>Resources</span>",
        hero_desc: "Using Artificial Intelligence to classify waste and track the environmental impact of the whole school.",
        btn_scan: "Scan Waste (AI)",
        btn_stats: "View Stats",
        feat_scan_title: "AI Recognition",
        feat_scan_desc: "Classify waste automatically in 3 seconds.",
        feat_stats_title: "Track Impact",
        feat_stats_desc: "View real-time CO2 reduction data.",
        feat_wiki_title: "Recycling Wiki",
        feat_wiki_desc: "Detailed guide on how to handle each waste type.",
        feat_rewards_title: "Rewards & Privileges",
        feat_rewards_desc: "Use Green Tokens to redeem school privileges.",
        scanner_title: "AI Waste Scanner",
        upload_title: "Snap or Upload",
        upload_desc: "AI will automatically classify waste for you",
        btn_camera: "Open Camera",
        btn_upload: "Choose from Gallery",
        scanner_tip: "On mobile: tap <b>Open Camera</b> to snap directly. On desktop: name the file with a keyword (e.g. plastic-bottle.jpg).",
        result_title: "AI Analysis Result",
        confidence: "Confidence:",
        btn_confirm: "Confirm Recycled",
        btn_rescan: "Scan Again",
        dashboard_title: "Impact Dashboard",
        dashboard_subtitle: "Real-time data from the whole school",
        filter_class: "Class",
        filter_grade: "Grade",
        filter_school: "Whole School",
        chart_waste_title: "Waste Composition",
        chart_trend_title: "Monthly Trend",
        stat_co2_label: "CO2 Reduced",
        stat_waste_label: "Waste Recycled (kg)",
        stat_trees_label: "Trees Saved",
        wiki_title: "Recycling Guide",
        wiki_subtitle: "Quick lookup for common waste types",
        tab_guides: "Handbook",
        tab_videos: "Video Guides",
        wiki_plastic: "Plastic",
        wiki_plastic_desc: "Bottles, food containers, cups, straws, foam boxes.",
        wiki_plastic_do1: "Rinse and dry thoroughly",
        wiki_plastic_do2: "Flatten to save space",
        wiki_plastic_do3: "Remove caps and labels separately",
        wiki_plastic_dont: "No small straws or foam boxes",
        wiki_plastic_fact: "🌍 Recycling 1 PET bottle saves 60% of production energy",
        wiki_paper: "Paper",
        wiki_paper_desc: "Newspapers, cardboard, printed paper, milk cartons.",
        wiki_paper_do1: "Keep paper flat and dry",
        wiki_paper_do2: "Remove tape from cardboard boxes",
        wiki_paper_do3: "Stack neatly in piles",
        wiki_paper_dont: "No greasy or wet paper",
        wiki_paper_fact: "🌍 Recycling 1 ton of paper saves 17 trees from being cut",
        wiki_metal: "Metal",
        wiki_metal_desc: "Soda cans, food tins, bottle caps, old blades.",
        wiki_metal_do1: "Empty all liquid first",
        wiki_metal_do2: "Rinse food residue",
        wiki_metal_do3: "Crush aluminum cans if possible",
        wiki_metal_dont: "No aerosol cans with chemicals",
        wiki_metal_fact: "🌍 Recycling aluminum saves 95% energy vs. new production",
        wiki_glass: "Glass",
        wiki_glass_desc: "Glass jars, jam jars, condiment bottles.",
        wiki_glass_do1: "Rinse and remove cap",
        wiki_glass_do2: "Sort by color (clear, green, brown)",
        wiki_glass_do3: "Wrap if broken for safety",
        wiki_glass_dont: "No mirrors, lightbulbs, or door locks",
        wiki_glass_fact: "🌍 Glass can be recycled infinitely without losing quality",
        wiki_ewaste: "E-Waste",
        wiki_ewaste_desc: "Batteries, old phones, broken chargers, old laptops.",
        wiki_ewaste_do1: "Collect in a labeled E-Waste box",
        wiki_ewaste_do2: "Take to school collection point",
        wiki_ewaste_do3: "Wipe personal data before submitting",
        wiki_ewaste_dont: "Never crush batteries or burn e-waste",
        wiki_ewaste_fact: "⚠️ E-waste contains lead and mercury that pollute soil and water",
        wiki_organic: "Organic Waste",
        wiki_organic_desc: "Fruit peels, vegetable scraps, coffee grounds, leftover rice.",
        wiki_organic_do1: "Compost into plant fertilizer",
        wiki_organic_do2: "Drain excess liquid before composting",
        wiki_organic_do3: "Convert to biogas energy",
        wiki_organic_dont: "Don't store in plastic bags when composting",
        wiki_organic_fact: "🌍 Organic waste = 50-70% of household trash — composting cuts landfill waste",
        btn_login: "Log In",
        btn_logout: "Log Out",
        btn_redeem: "Redeem",
        login_subtitle: "Please select your account type",
        tab_student: "Student",
        tab_teacher: "Teacher",
        label_school: "School",
        label_class: "Class",
        label_name: "Full Name",
        label_password: "Password",
        label_teacher_id: "Teacher ID",
        rewards_title: "Rewards & Privileges",
        rewards_subtitle: "Use your Green Tokens to redeem school privileges",
        token_label: "Your Green Tokens",
        token_earn_tip: "💡 Scan waste and confirm recycling to earn tokens!",
        rewards_history: "Redemption History",
        rewards_login_prompt: "You need to log in to redeem privileges"
    }
};

const AppState = {
    lang: 'vi', // 'vi' or 'en'
    scope: 'class',
    currentPage: 'home',
    lastFileName: '',
    currentUser: null,    // { name, role: 'student'|'teacher', class }
    tokens: 0,
    redeemHistory: [],

    // Mock Data Store
    data: {
        personal: { co2: 24.5, waste: 150, trees: 12 },
        class: { co2: 540, waste: 3200, trees: 215 },
        grade: { co2: 2100, waste: 12500, trees: 850 },
        school: { co2: 8500, waste: 45000, trees: 3200 }
    },

    charts: {},

    init() {
        lucide.createIcons();

        // Setup Event Listeners
        const uploadInput = document.getElementById('ai-upload');
        if (uploadInput) {
            uploadInput.addEventListener('change', (e) => this.handleImageUpload(e));
        }

        this.initThemeToggle();
        this.updateLanguageUI();

        if (document.getElementById('wasteChart')) {
            this.initCharts();
        }
    },

    // --- Navigation Logic ---
    navigateTo(pageId) {
        this.currentPage = pageId;

        // Update Active Link State
        document.querySelectorAll('.nav-link').forEach(btn => {
            if (btn.dataset.page === pageId) btn.classList.add('active');
            else btn.classList.remove('active');
        });

        // Hide all pages
        document.querySelectorAll('.page-view').forEach(page => {
            page.classList.add('hidden');
            page.classList.remove('active');
        });

        // Show target page
        const targetPage = document.getElementById(`page-${pageId}`);
        if (targetPage) {
            targetPage.classList.remove('hidden');
            targetPage.classList.add('active');
            window.scrollTo(0, 0); // Scroll to top
        }

        // Page-specific hooks
        if (pageId === 'rewards') {
            this.updateTokenDisplays();
            this.renderRedeemHistory();
        }
    },

    // --- I18n Logic ---
    toggleLanguage() {
        this.lang = this.lang === 'vi' ? 'en' : 'vi';
        this.updateLanguageUI();
    },

    updateLanguageUI() {
        // Update Flag & Text
        const flag = document.getElementById('lang-icon');
        const text = document.getElementById('lang-text');

        if (this.lang === 'vi') {
            flag.src = "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg";
            text.textContent = "VN";
        } else {
            flag.src = "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg";
            text.textContent = "EN";
        }

        // Update All Text
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (Translations[this.lang][key]) {
                el.innerHTML = Translations[this.lang][key];
            }
        });
    },

    // --- Wiki Tab Logic ---
    showWikiTab(tabName) {
        // Toggle button active states
        document.querySelectorAll('.wiki-tabs .filter-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.getElementById(`wiki-tab-${tabName}`);
        if (activeBtn) activeBtn.classList.add('active');

        if (tabName === 'videos') {
            document.getElementById('wiki-guides').classList.add('hidden');
            document.getElementById('wiki-videos').classList.remove('hidden');
        } else {
            document.getElementById('wiki-guides').classList.remove('hidden');
            document.getElementById('wiki-videos').classList.add('hidden');
        }
    },

    // --- AI Scanner Simulation (Keyword-Based) ---
    handleImageUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        // Save filename for "AI" analysis
        this.lastFileName = file.name.toLowerCase();

        const reader = new FileReader();
        reader.onload = (e) => {
            const previewImg = document.getElementById('preview-img');
            previewImg.src = e.target.result;

            document.querySelector('.upload-content').classList.add('hidden');
            document.getElementById('ai-preview').classList.remove('hidden');
            document.getElementById('scanning-effect').classList.remove('hidden');

            setTimeout(() => {
                this.finishScanning();
            }, 2500); // Simulate processing time
        };
        reader.readAsDataURL(file);
    },

    finishScanning() {
        document.getElementById('scanning-effect').classList.add('hidden');
        document.getElementById('scanner-result').classList.remove('hidden');

        const filename = this.lastFileName || "";
        let resultId = 5; // Default to "Unknown/Not Waste"

        // "Smart" Keyword Detection (For Demo Purposes)
        // Adjust these keywords to match the files you will upload
        if (filename.includes('chai') || filename.includes('bottle') || filename.includes('plastic') || filename.includes('nhua')) {
            resultId = 0; // Plastic
        } else if (filename.includes('giay') || filename.includes('paper') || filename.includes('sach') || filename.includes('book')) {
            resultId = 1; // Paper
        } else if (filename.includes('lon') || filename.includes('can') || filename.includes('kim loai') || filename.includes('metal')) {
            resultId = 2; // Metal
        } else if (filename.includes('hop') || filename.includes('box') || filename.includes('carton')) {
            resultId = 3; // Carton
        } else if (filename.includes('nguoi') || filename.includes('person') || filename.includes('face') || filename.includes('selfie') || filename.includes('anh')) {
            resultId = 5; // Not Waste (Person)
        } else {
            // Fallback: Random but biased towards "Not Waste" to be safe? 
            // Or just "Unknown"
            resultId = 4; // Unknown
        }

        const results = [
            { id: 0, type: { vi: 'Chai Nhựa (PET)', en: 'Plastic Bottle (PET)' }, confidence: '99%', icon: 'coffee', guide: { vi: 'Rửa sạch, ép dẹp và bỏ vào thùng màu vàng.', en: 'Rinse, flatten, allow cap on.' }, impact: 0.05, isWaste: true },
            { id: 1, type: { vi: 'Giấy A4/Sách', en: 'Paper/Books' }, confidence: '96%', icon: 'file-text', guide: { vi: 'Giữ phẳng, khô ráo. Không dính dầu mỡ.', en: 'Keep dry and flat. No grease.' }, impact: 0.04, isWaste: true },
            { id: 2, type: { vi: 'Lon Nhôm', en: 'Aluminum Can' }, confidence: '98%', icon: 'disc', guide: { vi: 'Đổ hết nước thừa, ép dẹp nếu có thể.', en: 'Empty liquid, crush if possible.' }, impact: 0.08, isWaste: true },
            { id: 3, type: { vi: 'Hộp Carton', en: 'Cardboard Box' }, confidence: '97%', icon: 'package-open', guide: { vi: 'Tháo băng keo, xếp gọn gàng.', en: 'Remove tape, flatten completely.' }, impact: 0.06, isWaste: true },
            { id: 4, type: { vi: 'Không xác định', en: 'Unknown Object' }, confidence: '85%', icon: 'alert-circle', guide: { vi: 'Không nhận diện được rác tái chế trong ảnh này.', en: 'No recyclable waste detected in this image.' }, impact: 0, isWaste: false },
            { id: 5, type: { vi: 'Không phải rác', en: 'Not Waste' }, confidence: '95%', icon: 'user-x', guide: { vi: 'Đây có vẻ là người hoặc vật dụng cá nhân, không phải rác!', en: 'This appears to be a person or personal item, not waste!' }, impact: 0, isWaste: false }
        ];

        const result = results.find(r => r.id === resultId) || results[4];

        document.getElementById('result-type').textContent = result.type[this.lang];
        document.getElementById('result-confidence').textContent = result.confidence;
        document.getElementById('result-guide').textContent = "💡 " + result.guide[this.lang];

        // Update Icon & Style
        const iconWrapper = document.getElementById('result-icon-wrapper');
        iconWrapper.innerHTML = `<i data-lucide="${result.icon}"></i>`;

        // Reset classes
        iconWrapper.className = 'result-icon-wrapper';
        const actionsDiv = document.querySelector('.scanner-actions');
        const impactDiv = document.querySelector('.impact-gained');
        const confirmBtn = actionsDiv.querySelector('.btn-primary');

        if (result.isWaste) {
            iconWrapper.classList.add('plastic');
            confirmBtn.classList.remove('hidden');
            impactDiv.classList.remove('hidden');
            impactDiv.innerHTML = `<i data-lucide="leaf"></i> +${result.impact}kg CO2`;
        } else {
            iconWrapper.classList.add('error'); // Error red
            confirmBtn.classList.add('hidden');
            impactDiv.classList.add('hidden');
        }

        lucide.createIcons();
    },

    resetScanner() {
        document.getElementById('ai-upload').value = '';
        document.getElementById('ai-preview').classList.add('hidden');
        document.querySelector('.upload-content').classList.remove('hidden');
        document.getElementById('scanner-result').classList.add('hidden');
    },

    confirmRecycle() {
        const earned = 10;
        if (this.currentUser) {
            this.tokens += earned;
            this.updateTokenDisplays();
            const msg = this.lang === 'vi'
                ? `🎉 Xác nhận tái chế! Bạn nhận +${earned} Green Tokens. Tổng: ${this.tokens} tokens.`
                : `🎉 Recycled Confirmed! +${earned} Green Tokens. Total: ${this.tokens} tokens.`;
            alert(msg);
        } else {
            const msg = this.lang === 'vi'
                ? `🎉 Xác nhận tái chế! Đăng nhập để kiếm Green Tokens.`
                : `🎉 Recycled Confirmed! Log in to earn Green Tokens.`;
            alert(msg);
        }
        this.resetScanner();
    },

    // --- Login Modal ---
    openLoginModal() {
        document.getElementById('login-modal').classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    },

    closeLoginModal() {
        document.getElementById('login-modal').classList.add('hidden');
        document.body.style.overflow = '';
    },

    switchLoginTab(tab) {
        document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
        document.getElementById(`tab-${tab}`).classList.add('active');
        document.getElementById('form-student').classList.add('hidden');
        document.getElementById('form-teacher').classList.add('hidden');
        document.getElementById(`form-${tab}`).classList.remove('hidden');
    },

    loginAs(role) {
        let name, userClass;
        if (role === 'student') {
            name = document.getElementById('stu-name').value.trim();
            userClass = document.getElementById('stu-class').value;
            if (!name) { alert(this.lang === 'vi' ? 'Vui lòng nhập họ tên!' : 'Please enter your name!'); return; }
        } else {
            name = document.getElementById('tch-name').value.trim();
            userClass = document.getElementById('tch-id').value || 'GV001';
            if (!name) { alert(this.lang === 'vi' ? 'Vui lòng nhập họ tên!' : 'Please enter your name!'); return; }
        }

        this.currentUser = { name, role, class: userClass };
        this.tokens = role === 'teacher' ? 200 : 0; // Teachers start with demo tokens
        this.closeLoginModal();
        this.updateNavAvatar();
        this.updateTokenDisplays();

        const welcome = this.lang === 'vi'
            ? `👋 Chào mừng, ${name}! (Đã đăng nhập với tư cách ${role === 'teacher' ? 'Giáo viên' : 'Học sinh'})`
            : `👋 Welcome, ${name}! (Logged in as ${role === 'teacher' ? 'Teacher' : 'Student'})`;
        alert(welcome);
    },

    logout() {
        this.currentUser = null;
        this.tokens = 0;
        this.redeemHistory = [];
        document.getElementById('nav-guest').classList.remove('hidden');
        document.getElementById('nav-user').classList.add('hidden');
        this.updateTokenDisplays();
    },

    openUserMenu() {
        const u = this.currentUser;
        if (!u) return;
        const msg = this.lang === 'vi'
            ? `👤 ${u.name}\nLớp/Mã: ${u.class}\nTokens: ${this.tokens}\n\nNhấn OK để đăng xuất.`
            : `👤 ${u.name}\nClass: ${u.class}\nTokens: ${this.tokens}\n\nPress OK to log out.`;
        if (confirm(msg)) this.logout();
    },

    updateNavAvatar() {
        const u = this.currentUser;
        if (!u) return;
        const seed = encodeURIComponent(u.name);
        document.getElementById('nav-avatar').src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;
        document.getElementById('nav-username').textContent = u.name;
        document.getElementById('nav-guest').classList.add('hidden');
        document.getElementById('nav-user').classList.remove('hidden');
        lucide.createIcons();
    },

    updateTokenDisplays() {
        const t = this.tokens;
        const navEl = document.getElementById('nav-tokens');
        if (navEl) navEl.textContent = t;
        const rewardsEl = document.getElementById('rewards-token-count');
        if (rewardsEl) rewardsEl.textContent = t;
    },

    // --- Rewards ---
    redeemReward(id, name, cost) {
        if (!this.currentUser) {
            const msg = this.lang === 'vi' ? 'Đăng nhập để đổi quà nhé!' : 'Please log in to redeem rewards!';
            alert(msg);
            this.openLoginModal();
            return;
        }
        if (this.tokens < cost) {
            const msg = this.lang === 'vi'
                ? `Bạn cần ${cost} tokens nhưng chỉ có ${this.tokens}. Quét thêm rác để kiếm token nhé!`
                : `You need ${cost} tokens but only have ${this.tokens}. Scan more waste to earn tokens!`;
            alert(msg);
            return;
        }
        const confirm_msg = this.lang === 'vi'
            ? `Đổi "${name}" với ${cost} tokens?`
            : `Redeem "${name}" for ${cost} tokens?`;
        if (!confirm(confirm_msg)) return;

        this.tokens -= cost;
        this.redeemHistory.push({ name, cost, date: new Date().toLocaleDateString('vi-VN') });
        this.updateTokenDisplays();
        this.renderRedeemHistory();

        const success = this.lang === 'vi'
            ? `🎉 Đổi quà thành công! Bạn đã đổi: ${name}. Còn lại: ${this.tokens} tokens.`
            : `🎉 Redeemed: ${name}! Remaining: ${this.tokens} tokens.`;
        alert(success);
    },

    renderRedeemHistory() {
        const list = document.getElementById('rewards-history-list');
        const section = document.getElementById('rewards-history-section');
        if (!list || !section) return;
        if (this.redeemHistory.length === 0) { section.classList.add('hidden'); return; }
        section.classList.remove('hidden');
        list.innerHTML = this.redeemHistory.map(h =>
            `<div class="history-item"><i data-lucide="gift"></i><span>${h.name}</span><span class="history-date">${h.date}</span><span class="history-cost">-${h.cost} tokens</span></div>`
        ).join('');
        lucide.createIcons();
    },

    // --- Statistics & Charts ---
    setStatsScope(scope) {
        this.scope = scope;

        // UI Toggles
        document.querySelectorAll('.scope-btn').forEach(btn => btn.classList.remove('active'));
        const btn = document.getElementById(`btn-${scope}`);
        if (btn) btn.classList.add('active');

        // Show/Hide Controls & Profile
        const gradeSelect = document.getElementById('grade-select');
        const classSelect = document.getElementById('class-select');
        const profile = document.getElementById('profile-context');

        if (gradeSelect) gradeSelect.classList.add('hidden');
        if (classSelect) classSelect.classList.add('hidden');
        if (profile) profile.classList.add('hidden');

        if (scope === 'personal') {
            if (profile) profile.classList.remove('hidden');
        } else if (scope === 'class') {
            if (gradeSelect) gradeSelect.classList.remove('hidden');
            if (classSelect) classSelect.classList.remove('hidden');
            this.populateClasses();
        } else if (scope === 'grade') {
            if (gradeSelect) gradeSelect.classList.remove('hidden');
        }

        this.updateDashboardData();
    },

    populateClasses() {
        const grade = document.getElementById('grade-select').value;
        const classSelect = document.getElementById('class-select');
        if (!classSelect) return;

        classSelect.innerHTML = '';

        // Generate A1 to A10
        for (let i = 1; i <= 10; i++) {
            const className = `${grade}A${i}`;
            const option = document.createElement('option');
            option.value = className;
            option.textContent = `Lớp ${className}`;
            classSelect.appendChild(option);
        }
    },

    updateDashboardData() {
        // Generate Mock Data based on current selection
        let co2, waste, trees;
        let baseMult = 1;

        if (this.scope === 'class') {
            const className = document.getElementById('class-select').value || '9A1';
            const seed = className.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
            baseMult = 20;
            co2 = Math.floor(500 + (seed % 100));
            waste = Math.floor(3000 + (seed % 500));
            trees = Math.floor(200 + (seed % 50));
            const subtitle = document.getElementById('dashboard-subtitle-text');
            if (subtitle) subtitle.textContent = `Dữ liệu lớp: ${className}`;
        } else if (this.scope === 'grade') {
            const grade = document.getElementById('grade-select').value;
            baseMult = 100;
            co2 = 2000 + (grade * 100);
            waste = 12000 + (grade * 500);
            trees = 800 + (grade * 20);
            const subtitle = document.getElementById('dashboard-subtitle-text');
            if (subtitle) subtitle.textContent = `Dữ liệu Khối ${grade}`;
        } else { // School
            baseMult = 400;
            co2 = 8500; waste = 45000; trees = 3200;
            const subtitle = document.getElementById('dashboard-subtitle-text');
            if (subtitle) subtitle.textContent = "THCS Nguyễn Gia Thiều";
        }

        this.animateValue('stat-co2', co2);
        this.animateValue('stat-waste', waste);
        this.animateValue('stat-trees', trees);

        this.updateCharts(baseMult);
    },

    initCharts() {
        const ctxWaste = document.getElementById('wasteChart').getContext('2d');
        const ctxTrend = document.getElementById('trendChart').getContext('2d');

        this.charts.waste = new Chart(ctxWaste, {
            type: 'doughnut',
            data: {
                labels: ['Plastic', 'Paper', 'Metal', 'Glass'],
                datasets: [{
                    data: [35, 40, 15, 10],
                    backgroundColor: ['#10B981', '#3B82F6', '#F59E0B', '#6366F1'],
                    borderWidth: 2,
                    borderColor: '#ffffff',
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'right', labels: { usePointStyle: true, color: '#9CA3AF' } }
                }
            }
        });

        this.charts.trend = new Chart(ctxTrend, {
            type: 'line',
            data: {
                labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
                datasets: [{
                    label: 'Tái chế (kg)',
                    data: [65, 59, 80, 81, 56, 95],
                    fill: true,
                    backgroundColor: (context) => {
                        const ctx = context.chart.ctx;
                        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                        gradient.addColorStop(0, 'rgba(16, 185, 129, 0.4)');
                        gradient.addColorStop(1, 'rgba(16, 185, 129, 0.0)');
                        return gradient;
                    },
                    borderColor: '#10B981',
                    tension: 0.4,
                    pointRadius: 4,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, grid: { borderDash: [5, 5], color: '#374151' }, ticks: { color: '#9CA3AF' } },
                    x: { grid: { display: false }, ticks: { color: '#9CA3AF' } }
                }
            }
        });

        // Trigger initial
        setTimeout(() => this.setStatsScope('class'), 100);
    },

    updateCharts(multiplier) {
        if (!this.charts.waste) return;

        const baseDataWaste = [35, 40, 15, 10];
        this.charts.waste.data.datasets[0].data = baseDataWaste.map(val => Math.floor(val * multiplier * (0.8 + Math.random() * 0.4)));
        this.charts.waste.update();

        const baseDataTrend = [65, 59, 80, 81, 56, 95];
        this.charts.trend.data.datasets[0].data = baseDataTrend.map(val => Math.floor(val * multiplier * (0.8 + Math.random() * 0.4)));
        this.charts.trend.update();
    },

    animateValue(id, end) {
        const obj = document.getElementById(id);
        const start = 0;
        const duration = 1000;
        let p = 0;
        const step = (timestamp) => {
            if (!p) p = timestamp;
            const progress = Math.min((timestamp - p) / duration, 1);
            obj.innerHTML = Math.floor(start + end * progress).toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    },

    initThemeToggle() {
        const toggle = document.getElementById('theme-toggle');
        toggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('ecotask-theme', next);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    AppState.init();
});
