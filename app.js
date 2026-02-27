/* ============================================
   EcoTask - ICIA Titanium Edition
   JavaScript - Role-Based Logic, AI Evidence Flow & Moderation
   ============================================ */

const Translations = {
    vi: {
        nav_home: "Trang chủ",
        nav_scan: "Quét AI",
        nav_proof: "Gửi minh chứng",
        nav_stats: "Thống kê",
        nav_wiki: "Hướng dẫn",
        nav_rewards: "Đổi quà",
        nav_teacher: "Xét duyệt",
        btn_scan: "Quét rác (AI)",
        btn_proof_direct: "Gửi minh chứng rác thải",
        btn_stats: "Xem thống kê",
        btn_camera: "Mở Camera",
        btn_upload: "Chọn từ máy",
        scanner_title: "Máy Quét Rác AI",
        upload_title: "Chụp ảnh hoặc tải lên",
        upload_desc: "AI sẽ tự động nhận diện và phân loại rác",
        result_title: "Kết quả Phân tích AI",
        confidence: "Độ chính xác:",
        btn_confirm: "Xác nhận & Chụp minh chứng",
        btn_rescan: "Quét lại từ đầu",
        btn_submit_proof: "Xác nhận gửi chờ xét duyệt",
        dashboard_title: "Thống kê Tác động",
        dashboard_subtitle: "Dữ liệu thực tế từ toàn trường",
        filter_class: "Lớp",
        filter_grade: "Khối",
        filter_school: "Toàn trường",
        tab_guides: "Cẩm nang",
        tab_videos: "Video Hướng dẫn",
        tab_student: "Học sinh",
        tab_teacher: "Giáo viên",
        rewards_title: "Đổi quà & Phần thưởng",
        rewards_subtitle: "Dùng Green Token để đổi lấy các đặc quyền học đường",
        token_label: "Số Green Tokens hiện có",
        token_earn_tip: "💡 Tích cực Green Task để nhận thêm token!",
        rewards_history: "Lịch sử đổi quà",
        history_title: "Lịch sử xét duyệt của bạn",
        history_empty: "Bạn chưa gửi minh chứng nào.",
        btn_logout: "Đăng xuất",
        btn_redeem: "Đổi ngay",
        // Teacher Specific
        teacher_panel_title: "Bảng Điều khiển Giáo viên",
        nav_teacher_panel: "Bắt đầu xét duyệt",
        tab_moderation: "Xét duyệt",
        tab_stats_edit: "Cập nhật Số liệu",
        btn_approve: "Chấp nhận",
        btn_reject: "Từ chối",
        stats_update_success: "Đã cập nhật số liệu toàn trường!",
        mod_empty: "Không có minh chứng nào đang chờ xét duyệt.",
        mod_approved: "Đã xét duyệt minh chứng. Học sinh đã nhận được token!",
        // Role Selection
        landing_title: "EcoTask Titanium",
        landing_subtitle: "Hệ thống Quản lý Tái chế & Học đường Xanh",
        role_student_desc: "Quét rác, nhận ưu đãi & đóng góp xanh",
        role_teacher_desc: "Xét duyệt minh chứng & quản lý tác động",
        hero_badge: "Trợ lý Tái chế Thông minh AI",
        ai_identifying: "AI đang nhận diện...",
        placeholder_name: "Nhập họ và tên...",
        login_student: "Đăng nhập Học sinh",
        login_teacher: "Xác thực Giáo viên",
        label_name: "Họ và Tên",
        label_grade: "Khối",
        label_class: "Lớp",
        label_code: "Mã xác thực Giáo viên",
        placeholder_name: "Nhập họ và tên...",
        placeholder_code: "Nhập mã xác thực...",
        btn_join: "Tham gia ngay",
        // Wiki content
        wiki_title: "Cẩm nang Tái chế",
        wiki_subtitle: "Hướng dẫn chi tiết cách phân loại rác thải tại nguồn",
        wiki_plastic: "Nhựa tái chế",
        wiki_plastic_desc: "Chai nước, hộp nhựa, ly nhựa. Rửa sạch, bóp bẹp để tiết kiệm diện tích. Phân loại PET1, HDPE2.",
        wiki_paper: "Giấy khô",
        wiki_paper_desc: "Sách báo, hộp carton, giấy vụn. Giữ khô ráo, tháo ghim sắt, băng keo và lò xo nhựa.",
        wiki_metal: "Kim loại",
        wiki_metal_desc: "Lon nước, hộp thiếc, nhôm, sắt vụn. Đổ hết nước bên trong, rửa sơ để tránh mùi hôi.",
        wiki_organic: "Rác hữu cơ",
        wiki_organic_desc: "Vỏ trái cây, thức ăn thừa, lá cây. Để ráo nước, dùng làm phân compost cho vườn trường.",
        wiki_glass_title: "Thủy tinh",
        wiki_glass_desc: "Chai lọ thủy tinh, hũ gia vị. Tháo nắp nhôm/nhựa, rửa sạch, bọc kín nếu có mảnh vỡ.",
        wiki_ewaste_title: "Rác Điện tử",
        wiki_ewaste_desc: "Pin hỏng, dây sạc, tai nghe, điện thoại cũ. Tuyệt đối không bỏ chung rác sinh hoạt.",
        wiki_textile_title: "Vải tái chế",
        wiki_textile_desc: "Quần áo cũ, giày dép, túi xách. Có thể quyên tặng hoặc tái chế thành giẻ lau, túi vải.",
        wiki_danger_title: "Rác Nguy hại",
        wiki_danger_desc: "Bóng đèn huỳnh quang, hộp sơn, nhiệt kế thủy ngân, chai lọ hóa chất độc hại.",
        // Stats labels
        stat_co2_label: "Khối lượng CO2 giảm",
        stat_waste_label: "Lượng rác tái chế",
        stat_trees_label: "Số cây xanh tương đương",
        chart_waste_title: "Tỷ lệ phân loại rác",
        chart_trend_title: "Tiến độ theo tháng"
    },
    en: {
        nav_home: "Home",
        nav_scan: "AI Scan",
        nav_proof: "Submit Proof",
        nav_stats: "Analytics",
        nav_wiki: "Handbook",
        nav_rewards: "Rewards",
        nav_teacher: "Moderation",
        btn_scan: "Scan Waste (AI)",
        btn_proof_direct: "Submit Waste Proof",
        btn_stats: "View Analytics",
        btn_camera: "Open Camera",
        btn_upload: "Upload Image",
        scanner_title: "AI Waste Scanner",
        upload_title: "Snap or Upload",
        upload_desc: "AI will automatically identify and categorize your waste.",
        result_title: "AI Analysis Result",
        confidence: "Confidence Level:",
        btn_confirm: "Confirm & Take Proof",
        btn_rescan: "Scan Again",
        btn_submit_proof: "Submit for Moderation",
        dashboard_title: "Impact Dashboard",
        dashboard_subtitle: "Real-time recycling data across the institution",
        filter_class: "My Class",
        filter_grade: "My Grade",
        filter_school: "Whole School",
        tab_guides: "Handbook",
        tab_videos: "Video Guides",
        tab_student: "Student portal",
        tab_teacher: "Teacher portal",
        rewards_title: "Rewards & Privileges",
        rewards_subtitle: "Redeem Green Tokens for school privileges",
        token_label: "Available Green Tokens",
        token_earn_tip: "💡 Scan waste and submit proofs to earn more tokens!",
        rewards_history: "Redemption History",
        history_title: "My Submission History",
        history_empty: "You haven't submitted any proofs yet.",
        btn_logout: "Log Out",
        btn_redeem: "Redeem",
        // Teacher Specific
        teacher_panel_title: "Teacher Dashboard",
        nav_teacher_panel: "Launch Moderation",
        tab_moderation: "Pending Approvals",
        tab_stats_edit: "Update Global Stats",
        btn_approve: "Approve",
        btn_reject: "Reject",
        stats_update_success: "School-wide statistics have been successfully updated!",
        mod_empty: "Queue is clear! No pending submissions for moderation.",
        mod_approved: "Submission approved. Tokens have been issued to the student!",
        // Role Selection
        landing_title: "EcoTask Titanium",
        landing_subtitle: "Intelligent Recycling Management System",
        role_student_desc: "Scan waste, earn tokens & unlock privileges",
        role_teacher_desc: "Track analytics & manage student submissions",
        login_student: "Student Login",
        login_teacher: "Teacher Portal",
        label_name: "Full Name",
        label_grade: "Grade",
        label_class: "Class",
        label_code: "Verification Code",
        placeholder_name: "Enter your full name...",
        placeholder_code: "Enter passcode...",
        btn_join: "Enter Portal",
        hero_badge: "AI-Powered Recycling Assistant",
        ai_identifying: "Analyzing Image...",
        // Wiki content
        wiki_title: "Recycling Handbook",
        wiki_subtitle: "Comprehensive guide to proper waste disposal",
        wiki_plastic_desc: "Water bottles, plastic containers. Rinse thoroughly and crush to save space.",
        wiki_paper_desc: "Newspapers, cardboard boxes. Keep dry and remove any metal staples or tape.",
        wiki_metal_desc: "Aluminum cans, tin boxes. Empty all liquids and rinse lightly before disposal.",
        wiki_organic_desc: "Fruit peels, food scraps. Drain excess liquid. Ideal for school composting.",
        wiki_glass_desc: "Glass bottles and jars. Remove lids. Wrap securely if shattered to prevent injury.",
        wiki_ewaste_desc: "Batteries, chargers, broken electronics. Must be disposed of in designated red bins.",
        wiki_textile_desc: "Old clothing, fabric scraps. Donate if wearable, or recycle for industrial use.",
        wiki_danger_desc: "Fluorescent bulbs, chemical containers, medical waste. Requires specialized handling.",
        wiki_danger_title: "Hazardous Materials",
        wiki_textile_title: "Textiles",
        wiki_ewaste_title: "Electronic Waste",
        wiki_glass_title: "Glass Materials",
        // Stats labels
        stat_co2_label: "Emissions Reduced (kg)",
        stat_waste_label: "Waste Recycled (kg)",
        stat_trees_label: "Equivalent Trees Saved",
        chart_waste_title: "Waste Composition",
        chart_trend_title: "Recycling Trends"
    }
};

const AppState = {
    lang: 'vi',
    scope: 'class',
    currentPage: 'home',
    currentUser: null, // { name, role: 'student'|'teacher', class }
    currentRole: null,
    tokens: 180, // Updated demo tokens
    redeemHistory: [],
    submissionHistory: [], // Student's own proofs
    rewardsData: [
        { id: 1, name: "Về sớm 15 phút", cost: 200, icon: "clock", desc: "Đặc quyền về sớm trong 1 buổi chiều", category: "Đặc quyền" },
        { id: 2, name: "Đổi chỗ ngồi", cost: 150, icon: "move", desc: "Chọn chỗ ngồi mong muốn trong 1 tuần", category: "Đặc quyền" },
        { id: 3, name: "Voucher Canteen 20k", cost: 100, icon: "utensils", desc: "Sử dụng tại Canteen toàn trường", category: "Voucher" },
        { id: 5, name: "Cộng điểm rèn luyện", cost: 300, icon: "award", desc: "Cộng 5 điểm rèn luyện cá nhân", category: "Học tập" },
        { id: 7, name: "Sử dụng Laptop giờ giải lao", cost: 250, icon: "laptop", desc: "Đặc quyền dùng laptop trong 1 tuần", category: "Đặc quyền" },
        { id: 8, name: "Ưu tiên mượn sách thư viện", cost: 50, icon: "book", desc: "Không cần xếp hàng khi mượn sách", category: "Học tập" }
    ],
    moderationQueue: [
        { id: 101, user: "Lê Bá Duy", class: "9.1", type: "Nhựa tái chế", time: "10:30", img: "assets/wiki/wiki_img_25.jpg" },
        { id: 102, user: "Trần Thị B", class: "8.2", type: "Giấy khô", time: "11:15", img: "assets/wiki/wiki_img_10.jpg" }
    ],

    // School Global Stats (Managed by Teacher)
    globalStats: {
        co2: 8500.5,
        waste: 45000,
        trees: 3200
    },

    charts: {},
    scannerState: 'upload', // upload, processing, result, proof
    lastScannerResult: null,

    init() {
        this.updateLanguageUI();
        this.initThemeToggle();

        // Check for saved session
        const savedUser = localStorage.getItem('ecotask-user');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            this.enterApp();
        }

        // Load submission history (Student personal)
        const savedHistory = localStorage.getItem('ecotask-history');
        if (savedHistory) {
            this.submissionHistory = JSON.parse(savedHistory);
        }

        // Load Global Moderation Queue (Shared between roles for demo)
        const savedQueue = localStorage.getItem('ecotask-mod-queue');
        if (savedQueue) {
            this.moderationQueue = JSON.parse(savedQueue);
        }

        // Load Personal Tokens
        const savedTokens = localStorage.getItem('ecotask-tokens');
        if (savedTokens !== null) {
            this.tokens = parseInt(savedTokens);
        }

        this.renderRewards();
        this.updateClassOptions();

        // Setup File Upload
        const uploadInput = document.getElementById('ai-upload');
        if (uploadInput) {
            uploadInput.addEventListener('change', (e) => this.handleImageUpload(e));
        }
    },

    // --- Role & Login Management ---
    showLogin(role) {
        this.currentRole = role;
        const title = document.getElementById('login-title');
        title.innerText = role === 'student' ? 'Đăng nhập Học sinh' : 'Xác thực Giáo viên';

        // Show/hide specific fields
        document.querySelectorAll('.student-only-fields').forEach(el => {
            role === 'student' ? el.classList.remove('hidden') : el.classList.add('hidden');
        });
        document.querySelectorAll('.teacher-only-fields').forEach(el => {
            role === 'teacher' ? el.classList.remove('hidden') : el.classList.add('hidden');
        });

        this.showLandingStep('login');
    },

    showLandingStep(step) {
        document.getElementById('landing-step-role').classList.toggle('hidden', step !== 'role');
        document.getElementById('landing-step-login').classList.toggle('hidden', step !== 'login');
    },

    updateClassOptions() {
        // Logic for 7.1 to 7.10 and others
        const grade = document.getElementById('login-grade').value;
        const classSelect = document.getElementById('login-class');
        classSelect.innerHTML = '';
        for (let i = 1; i <= 10; i++) {
            const opt = document.createElement('option');
            opt.value = `${grade}.${i}`;
            opt.textContent = `Lớp ${grade}.${i}`;
            classSelect.appendChild(opt);
        }
    },

    handleLogin(event) {
        event.preventDefault();
        const role = this.currentRole;
        const name = document.getElementById('login-name').value;
        const grade = role === 'student' ? document.getElementById('login-grade').value : 'Admin';
        const className = role === 'student' ? document.getElementById('login-class').value : 'Staff';

        // Mock validation for teacher code if needed
        if (role === 'teacher' && document.getElementById('login-code').value !== '1234') {
            alert("Mã code giáo viên không đúng (Demo: 1234)");
            return;
        }

        this.currentUser = { name, role, grade, class: className };
        localStorage.setItem('ecotask-user', JSON.stringify(this.currentUser));

        if (role === 'student') {
            this.tokens = 0; // Students start with 0 tokens
            localStorage.setItem('ecotask-tokens', '0');
        }

        this.enterApp();
    },

    enterApp() {
        const role = this.currentUser.role;
        document.getElementById('view-landing').classList.add('hidden');
        document.getElementById('app-container').classList.remove('hidden');

        // Show/Hide Role-based navigation
        document.querySelectorAll('.student-only').forEach(el => {
            role === 'student' ? el.classList.remove('hidden') : el.classList.add('hidden');
        });
        document.querySelectorAll('.teacher-only').forEach(el => {
            role === 'teacher' ? el.classList.remove('hidden') : el.classList.add('hidden');
        });

        this.updateNavAvatar();
        this.updateProfileCard(); // Update Home profile card
        this.updateTokenDisplay();
        this.renderStudentHistory(); // NEW: Render existing items
        this.navigateTo('home');

        if (role === 'teacher') {
            this.loadGlobalStatsIntoForm();
        }
    },

    openUserMenu() {
        if (confirm(this.lang === 'vi' ? "Bạn có muốn đăng xuất không?" : "Do you want to log out?")) {
            this.logout();
        }
    },

    openDirectProof() {
        this.resetScanner(); // Reset first to clear states
        this.navigateTo('scanner', 'proof');
        this.scannerState = 'proof';
        this.lastScannerResult = null;

        // Dynamic Title Update for Student Clarity
        const title = document.getElementById('scanner-title');
        const desc = document.getElementById('scanner-desc');
        if (title) title.innerText = this.lang === 'vi' ? 'Gửi minh chứng rác thải' : 'Submit Waste Proof';
        if (desc) desc.innerText = this.lang === 'vi' ? 'Chế độ gửi trực tiếp hình ảnh rác đã phân loại' : 'Direct proof submission mode active';

        document.getElementById('upload-zone').classList.add('hidden');
        document.getElementById('scanner-result').classList.remove('hidden'); // Fix: Unhide the parent container

        // Hide AI result details because this is direct proof mode
        document.querySelector('.result-card').classList.add('hidden');
        const resultTitle = document.querySelector('h3[data-i18n="result_title"]');
        if (resultTitle) resultTitle.classList.add('hidden');

        document.getElementById('proof-step').classList.remove('hidden');

        // Hide "Xác nhận AI", show "Gửi bằng chứng"
        document.getElementById('scanner-confirm-step').classList.add('hidden');
        document.getElementById('scanner-final-actions').classList.remove('hidden');

        // Hide "Scan Again" button in direct proof mode
        document.getElementById('scanner-reset-step').classList.add('hidden');

        // Initialize Camera
        const video = document.getElementById('camera-feed');
        if (video && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
                .then(stream => { video.srcObject = stream; })
                .catch(err => console.log("Camera simulation active"));
        }
    },

    logout() {
        localStorage.removeItem('ecotask-user');
        location.reload();
    },

    // --- Navigation ---
    navigateTo(pageId, highlightId = null) {
        this.currentPage = pageId;
        const activeHighlight = highlightId || pageId;

        // Visual Highlight logic
        document.querySelectorAll('.nav-link').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.page === activeHighlight);
        });

        document.querySelectorAll('.page-view').forEach(page => {
            page.classList.add('hidden');
            page.classList.remove('active');
        });

        const targetPage = document.getElementById(`page-${pageId}`);
        if (targetPage) {
            targetPage.classList.remove('hidden');
            targetPage.classList.add('active');
            window.scrollTo(0, 0);
        }

        // Init/Refresh specific page components
        if (pageId === 'stats' && !this.charts.waste) this.initCharts();
        if (pageId === 'teacher-panel') this.renderModerationQueue();
        if (pageId === 'rewards') this.renderRewards();
    },

    // --- AI Scanner Flow ---
    handleImageUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        this.scannerState = 'processing';
        document.querySelector('.upload-content').classList.add('hidden');
        document.getElementById('ai-preview').classList.remove('hidden');
        document.getElementById('scanning-effect').classList.remove('hidden');

        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('preview-img').src = e.target.result;
            setTimeout(() => this.finishScanning(file.name.toLowerCase()), 2000);
        };
        reader.readAsDataURL(file);
    },

    finishScanning(filename) {
        this.scannerState = 'result';
        document.getElementById('scanning-effect').classList.add('hidden');
        document.getElementById('scanner-result').classList.remove('hidden');

        // Fix: Ensure result cards are visible because direct proof hides them
        const resultCard = document.querySelector('.result-card');
        if (resultCard) resultCard.classList.remove('hidden');
        const resultTitle = document.querySelector('h3[data-i18n="result_title"]');
        if (resultTitle) resultTitle.classList.remove('hidden');

        let resultType = 'unknown';
        const name = filename.toLowerCase();

        // 1. Dòng rác cơ bản
        if (name.includes('nhua') || name.includes('bottle') || name.includes('chai') || name.includes('pet') || name.includes('cup') || name.includes('plastic') || name.includes('zalo') || name.includes('img') || name.includes('image') || name.includes('screenshot') || name.includes('cap')) {
            resultType = 'plastic'; // Default fallback assumption for unspecified photos
        }
        if (name.includes('giay') || name.includes('paper') || name.includes('carton') || name.includes('bia') || name.includes('book') || name.includes('tape')) {
            resultType = 'paper';
        }
        if (name.includes('lon') || name.includes('can') || name.includes('metal') || name.includes('tin') || name.includes('nhom')) {
            resultType = 'metal';
        }
        if (name.includes('rau') || name.includes('cu') || name.includes('qua') || name.includes('peel') || name.includes('apple') || name.includes('thua') || name.includes('organic')) {
            resultType = 'organic';
        }
        if (name.includes('thuy tinh') || name.includes('glass') || name.includes('lo')) {
            resultType = 'glass';
        }
        if (name.includes('pin') || name.includes('battery') || name.includes('dien tu') || name.includes('sac')) {
            resultType = 'ewaste';
        }
        if (name.includes('vai') || name.includes('ao') || name.includes('quan') || name.includes('shirt')) {
            resultType = 'textile';
        }

        // 2. Default if perfectly unknown
        if (resultType === 'unknown') {
            resultType = 'plastic'; // Make plastic the ultimate default for the demo
        }

        const data = {
            plastic: { name: 'Nhựa tái chế', icon: 'coffee', guide: 'Rửa sạch, ép xẹp để tiết kiệm diện tích.', color: 'plastic', conf: '99.4%' },
            paper: { name: 'Giấy khô', icon: 'file-text', guide: 'Giữ khô ráo, tháo ghim sắt và băng keo.', color: 'paper', conf: '98.8%' },
            metal: { name: 'Kim loại', icon: 'disc', guide: 'Đổ hết chất lỏng, rửa sơ bên trong.', color: 'metal', conf: '97.5%' },
            organic: { name: 'Rác hữu cơ', icon: 'apple', guide: 'Ủ phân hữu cơ cho vườn trường.', color: 'organic', conf: '96.2%' },
            glass: { name: 'Thủy tinh', icon: 'box', guide: 'Tháo nắp, bọc kín nếu có mảnh vỡ.', color: 'glass', conf: '95.1%' },
            ewaste: { name: 'Rác Điện tử', icon: 'zap', guide: 'Tuyệt đối không bỏ chung với rác khác.', color: 'ewaste', conf: '98.9%' },
            textile: { name: 'Vải tái chế', icon: 'shirt', guide: 'Quyên tặng hoặc làm giẻ lau tái sử dụng.', color: 'textile', conf: '94.3%' },
            unknown: { name: 'Không xác định', icon: 'alert-circle', guide: 'Vui lòng sử dụng hình ảnh rác thải hợp lệ (chai, giấy, lon...).', color: 'error', conf: '12.4%' }
        }[resultType];

        this.lastScannerResult = data;
        document.getElementById('result-type').textContent = data.name;
        document.getElementById('result-confidence').textContent = data.conf;
        document.getElementById('result-guide').textContent = "💡 " + data.guide;
        const iconWrap = document.getElementById('result-icon-wrapper');
        iconWrap.innerHTML = `<i data-lucide="${data.icon}"></i>`;
        iconWrap.className = 'result-icon-wrapper ' + data.color;

        const confirmBtn = document.querySelector('.scanner-actions .btn-primary');
        if (confirmBtn) confirmBtn.classList.toggle('hidden', resultType === 'unknown');

        lucide.createIcons();
    },

    confirmResult() {
        this.scannerState = 'proof';
        document.getElementById('scanner-result').classList.add('hidden');
        document.getElementById('proof-step').classList.remove('hidden');

        // Match nav highlight if we are in a subflow
        this.navigateTo('scanner', 'proof');

        const video = document.getElementById('camera-feed');
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
                .then(stream => { video.srcObject = stream; })
                .catch(err => console.log("Camera simulation mode active"));
        }
    },

    handleProofUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('proof-preview-img').src = e.target.result;
            document.getElementById('proof-preview-container').classList.remove('hidden');
            document.getElementById('scanner-final-actions').classList.remove('hidden');
            document.getElementById('scanner-confirm-step').classList.add('hidden');
        };
        reader.readAsDataURL(file);
    },

    submitForModeration() {
        const type = this.lastScannerResult ? this.lastScannerResult.name : (this.lang === 'vi' ? 'Minh chứng trực tiếp' : 'Direct Proof');
        const newItem = {
            id: Date.now(),
            user: this.currentUser.name,
            class: this.currentUser.class,
            type: type,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            img: document.getElementById('proof-preview-img').src,
            status: 'pending'
        };

        // Add to local student record
        this.submissionHistory.unshift(newItem);
        localStorage.setItem('ecotask-history', JSON.stringify(this.submissionHistory));

        // Add to global moderation queue (Shared persistence)
        this.moderationQueue.unshift(newItem);
        localStorage.setItem('ecotask-mod-queue', JSON.stringify(this.moderationQueue));

        alert(this.lang === 'vi' ? "Đã gửi minh chứng! Vui lòng chờ giáo viên xét duyệt để nhận token." : "Evidence submitted! Awaiting teacher approval for tokens.");
        this.resetScanner();
        this.renderStudentHistory();
        this.navigateTo('home');
    },

    renderStudentHistory() {
        const grid = document.getElementById('student-history-grid');
        if (!grid) return;

        if (this.submissionHistory.length === 0) {
            grid.innerHTML = `<p data-i18n="history_empty" style="grid-column: 1/-1; opacity: 0.5; text-align: center; padding: 20px;">${Translations[this.lang].history_empty}</p>`;
            return;
        }

        grid.innerHTML = this.submissionHistory.map(item => `
            <div class="history-item-mini">
                <img src="${item.img}" alt="Proof">
                <div class="history-item-info">
                    <span style="font-weight:700; font-size:0.85rem">${item.type}</span>
                    <span style="font-size:0.7rem; opacity:0.7">${item.time}</span>
                    <div style="display:flex; align-items:center; gap:4px">
                        <i data-lucide="${item.status === 'pending' ? 'clock' : 'check-circle'}" style="width:12px; height:12px"></i>
                        <span class="history-status status-${item.status}">${item.status === 'pending' ? (this.lang === 'vi' ? 'Chờ duyệt' : 'Pending') : (this.lang === 'vi' ? 'Đã duyệt' : 'Approved')}</span>
                    </div>
                </div>
            </div>
        `).join('');
        lucide.createIcons();
    },

    resetScanner() {
        this.scannerState = 'idle';
        this.lastScannerResult = null;

        // Reset Titles to Default Explicitly
        const title = document.getElementById('scanner-title');
        const desc = document.getElementById('scanner-desc');
        if (title) title.innerText = this.lang === 'vi' ? 'Máy Quét Rác AI' : 'AI Waste Scanner';
        if (desc) desc.innerText = this.lang === 'vi' ? 'Chụp ảnh hoặc tải lên hình ảnh rác để AI phân loại' : 'Snap or Upload for AI analysis';

        document.querySelector('.upload-content').classList.remove('hidden');
        document.getElementById('ai-preview').classList.add('hidden');
        document.getElementById('upload-zone').classList.remove('hidden');
        document.getElementById('scanner-result').classList.add('hidden');
        document.getElementById('proof-step').classList.add('hidden');
        document.getElementById('scanner-final-actions').classList.add('hidden');
        document.getElementById('scanner-confirm-step').classList.remove('hidden');
        document.getElementById('scanner-reset-step').classList.remove('hidden'); // Ensure Scan Again is visible for AI scanner
        document.getElementById('proof-preview-container').classList.add('hidden');

        const video = document.getElementById('camera-feed');
        if (video && video.srcObject) {
            video.srcObject.getTracks().forEach(track => track.stop());
            video.srcObject = null;
        }
    },

    // --- Teacher Panels ---
    switchTeacherTab(tab) {
        document.querySelectorAll('.t-tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tab);
        });
        document.getElementById('teacher-moderation').classList.toggle('hidden', tab !== 'moderation');
        document.getElementById('teacher-stats-edit').classList.toggle('hidden', tab !== 'stats');
    },

    renderModerationQueue() {
        let container = document.getElementById('moderation-grid');

        // Ensure container exists
        if (!container) return;

        if (this.moderationQueue.length === 0) {
            container.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 60px 20px; color: var(--text-muted); background: var(--bg-white); border-radius: 12px; border: 1px solid var(--border-color); margin-top:20px;">
                <i data-lucide="inbox" style="width:48px; height:48px; margin-bottom:15px; color: var(--primary)"></i>
                <p style="font-size: 1.1rem">${Translations[this.lang].mod_empty}</p>
                <p style="font-size: 0.85rem; opacity: 0.7; margin-top: 5px">Khi học sinh gửi bằng chứng, chúng sẽ xuất hiện tại đây.</p>
            </div>`;
            lucide.createIcons();
            return;
        }

        container.innerHTML = this.moderationQueue.map(item => `
            <div class="moderation-card" id="mod-card-${item.id}">
                <div class="mod-proof-img">
                    <img src="${item.img}" alt="Proof">
                    <span class="mod-category-badge">${item.type}</span>
                </div>
                <div class="mod-content">
                    <div class="mod-user-info">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${item.user}" class="mod-avatar">
                        <div>
                            <strong>${item.user}</strong>
                            <div style="font-size: 0.8rem; color: var(--text-muted)">Lớp ${item.class} • ${item.time}</div>
                        </div>
                    </div>
                    
                    <div class="token-selector" style="margin-top:15px; background: var(--bg-primary); padding:8px; border-radius:10px; border: 1px solid var(--border-color)">
                        <label style="font-size: 0.7rem; opacity:0.8; display:block; margin-bottom:5px">Số token thưởng:</label>
                        <select id="reward-amount-${item.id}" style="width:100%; padding:5px; border-radius:6px; background: var(--bg-secondary); color: var(--text-main); border:none">
                            <option value="10">10 Tokens (+0.5 kg CO2)</option>
                            <option value="20" selected>20 Tokens (+1.0 kg CO2)</option>
                            <option value="50">50 Tokens (+2.5 kg CO2)</option>
                        </select>
                    </div>
                </div>
                <div class="mod-actions">
                    <button class="btn btn-outline" onclick="AppState.moderateAction(${item.id}, 'reject')" style="font-size:0.8rem">
                        <i data-lucide="x"></i> ${Translations[this.lang].btn_reject}
                    </button>
                    <button class="btn btn-primary" onclick="AppState.moderateAction(${item.id}, 'approve')" style="font-size:0.8rem">
                        <i data-lucide="check"></i> ${Translations[this.lang].btn_approve}
                    </button>
                </div>
            </div>
        `).join('');
        lucide.createIcons();
    },

    moderateAction(id, action) {
        const card = document.getElementById(`mod-card-${id}`);
        const rewardSelect = document.getElementById(`reward-amount-${id}`);
        const amount = rewardSelect ? parseInt(rewardSelect.value) : 20;

        card.style.transform = 'scale(0.95)';
        card.style.opacity = '0.5';
        card.style.pointerEvents = 'none';

        setTimeout(() => {
            const item = this.moderationQueue.find(i => i.id === id);
            this.moderationQueue = this.moderationQueue.filter(i => i.id !== id);
            localStorage.setItem('ecotask-mod-queue', JSON.stringify(this.moderationQueue));

            this.renderModerationQueue();

            if (action === 'approve') {
                // Persistent Token Granting
                this.tokens += amount;
                localStorage.setItem('ecotask-tokens', this.tokens);
                this.updateTokenDisplay();

                // Update history in storage for student
                const savedHistory = JSON.parse(localStorage.getItem('ecotask-history') || '[]');
                const historyIdx = savedHistory.findIndex(i => i.id === id);
                if (historyIdx !== -1) {
                    savedHistory[historyIdx].status = 'approved';
                    localStorage.setItem('ecotask-history', JSON.stringify(savedHistory));
                }

                alert(`${Translations[this.lang].mod_approved} (+${amount} Tokens)`);
            }
        }, 600);
    },

    loadGlobalStatsIntoForm() {
        document.getElementById('edit-co2').value = this.globalStats.co2;
        document.getElementById('edit-waste').value = this.globalStats.waste;
        document.getElementById('edit-trees').value = this.globalStats.trees;
    },

    saveGlobalStats() {
        this.globalStats.co2 = parseFloat(document.getElementById('edit-co2').value);
        this.globalStats.waste = parseFloat(document.getElementById('edit-waste').value);
        this.globalStats.trees = parseFloat(document.getElementById('edit-trees').value);
        alert(Translations[this.lang].stats_update_success);
        this.navigateTo('stats');
    },

    // --- Stats & Charts ---
    initCharts() {
        const ctxWaste = document.getElementById('wasteChart').getContext('2d');
        const ctxTrend = document.getElementById('trendChart').getContext('2d');

        this.charts.waste = new Chart(ctxWaste, {
            type: 'doughnut',
            data: {
                labels: ['Plastic', 'Paper', 'Metal', 'Organic'],
                datasets: [{
                    data: [35, 40, 15, 10],
                    backgroundColor: ['#10B981', '#3B82F6', '#F59E0B', '#A16207'],
                    borderWidth: 0
                }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
        });

        this.charts.trend = new Chart(ctxTrend, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'CO2 reduced (kg)',
                    data: [200, 450, 300, 600, 550, 800],
                    borderColor: '#10B981',
                    tension: 0.4,
                    fill: true,
                    backgroundColor: 'rgba(16, 185, 129, 0.1)'
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    },

    // --- UI Helpers ---
    updateLanguageUI() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (Translations[this.lang][key]) {
                if (el.tagName === 'INPUT') {
                    el.placeholder = Translations[this.lang][key];
                } else {
                    el.innerHTML = Translations[this.lang][key];
                }
            }
        });

        // Sync specific selects
        const gradeSelects = document.querySelectorAll('#login-grade, #grade-select');
        gradeSelects.forEach(sel => {
            if (sel) {
                const val = sel.value;
                sel.innerHTML = `
                    <option value="6">${this.lang === 'vi' ? 'Khối 6' : 'Grade 6'}</option>
                    <option value="7">${this.lang === 'vi' ? 'Khối 7' : 'Grade 7'}</option>
                    <option value="8">${this.lang === 'vi' ? 'Khối 8' : 'Grade 8'}</option>
                    <option value="9">${this.lang === 'vi' ? 'Khối 9' : 'Grade 9'}</option>
                `;
                sel.value = val;
            }
        });

        this.updateClassOptions();
    },

    toggleLanguage() {
        this.lang = this.lang === 'vi' ? 'en' : 'vi';
        this.updateLanguageUI();
        const flag = document.getElementById('lang-icon');
        const text = document.getElementById('lang-text');
        if (this.lang === 'vi') {
            flag.src = "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg";
            text.textContent = "VN";
        } else {
            flag.src = "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg";
            text.textContent = "EN";
        }
    },

    updateNavAvatar() {
        if (!this.currentUser) return;
        document.getElementById('nav-username').textContent = this.currentUser.name;
        document.getElementById('nav-tokens').textContent = this.tokens;
        document.getElementById('nav-avatar').src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(this.currentUser.name)}`;
    },

    updateProfileCard() {
        const card = document.getElementById('user-profile-home');
        if (!card || !this.currentUser) return;

        card.querySelector('.profile-name').textContent = this.currentUser.name;
        card.querySelector('.profile-class').textContent = this.currentUser.role === 'student' ? `Lớp ${this.currentUser.class}` : 'Ban Quản Trị';
        card.querySelector('.profile-avatar').src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(this.currentUser.name)}`;
    },

    updateTokenDisplay() {
        const tds = document.querySelectorAll('#nav-tokens, #rewards-token-count');
        tds.forEach(el => {
            if (el) el.textContent = this.tokens;
        });
    },

    renderRewards() {
        const grid = document.getElementById('rewards-grid');
        if (!grid) return;

        grid.innerHTML = this.rewardsData.map(item => `
            <div class="wiki-card reward-card">
                <div class="reward-img" style="background: var(--bg-secondary); display:flex; align-items:center; justify-content:center; height:140px; border-radius:12px; margin-bottom:16px">
                    <i data-lucide="${item.icon}" style="width:48px; height:48px; color:var(--primary)"></i>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:8px">
                    <span class="badge" style="font-size:0.6rem; opacity:0.8">${item.category}</span>
                    <span style="font-weight:900; color:var(--primary); font-size:1.1rem">${item.cost} <i data-lucide="leaf" style="width:14px; height:14px; display:inline"></i></span>
                </div>
                <h3 style="margin-bottom:4px; font-size:1.1rem">${item.name}</h3>
                <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:20px">${item.desc}</p>
                <button class="btn btn-primary btn-sm btn-block" onclick="AppState.redeemReward(${item.id}, '${item.name}', ${item.cost})">
                    ${Translations[this.lang].btn_redeem}
                </button>
            </div>
        `).join('');
        lucide.createIcons();
    },

    initThemeToggle() {
        const toggle = document.getElementById('theme-toggle');
        if (!toggle) return;
        toggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
        });
    },

    // --- Stats & Animations ---
    animateValue(id, end) {
        const obj = document.getElementById(id);
        if (!obj) return;
        const start = 0;
        const duration = 1000;
        let p = 0;
        const step = (timestamp) => {
            if (!p) p = timestamp;
            const progress = Math.min((timestamp - p) / duration, 1);
            obj.innerHTML = Math.floor(start + end * progress).toLocaleString();
            if (progress < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
    },

    updateDashboardData() {
        let co2, waste, trees;
        if (this.scope === 'school') {
            co2 = this.globalStats.co2;
            waste = this.globalStats.waste;
            trees = this.globalStats.trees;
        } else {
            // Mock data for class/grade
            const mult = this.scope === 'class' ? 0.05 : 0.2;
            co2 = this.globalStats.co2 * mult;
            waste = this.globalStats.waste * mult;
            trees = this.globalStats.trees * mult;
        }

        this.animateValue('stat-co2', co2);
        this.animateValue('stat-waste', waste);
        this.animateValue('stat-trees', trees);

        if (this.charts.waste) {
            const baseData = [35, 40, 15, 10];
            this.charts.waste.data.datasets[0].data = baseData.map(v => v * (0.8 + Math.random() * 0.4));
            this.charts.waste.update();
        }
    },

    setStatsScope(s) {
        this.scope = s;
        document.querySelectorAll('.scope-btn').forEach(b => b.classList.toggle('active', b.id === `btn-${s}`));
        this.updateDashboardData();
    },

    showWikiTab(t) {
        document.getElementById('wiki-guides').classList.toggle('hidden', t !== 'guides');
        document.getElementById('wiki-videos').classList.toggle('hidden', t !== 'videos');
        document.querySelectorAll('.w-tab').forEach(b => b.classList.toggle('active', b.id === `w-tab-${t}`));
    },

    wikiData: {
        plastic: {
            title: "Nhựa Tái Chế",
            desc: "Rửa sạch, ép xẹp trước khi bỏ vào thùng để tiết kiệm diện tích. Chỉ sử dụng cho các loại nhựa có ký hiệu tái chế.",
            img: "assets/plastic.png",
            examples: [
                { name: "Chai Nhựa (PET)", img: "assets/wiki/wiki_img_21.jpg" },
                { name: "Ly Trà Sữa Nhựa", img: "assets/wiki/wiki_img_40.jpg" },
                { name: "Túi Nilon Sạch", img: "assets/wiki/wiki_img_35.jpg" },
                { name: "Hộp Cơm Nhựa", img: "assets/wiki/wiki_img_27.jpg" },
                { name: "Bình Tẩy Rửa", img: "assets/wiki/wiki_img_10.jpg" },
                { name: "Ống Hút Nhựa", img: "assets/wiki/wiki_img_47.jpg" },
                { name: "Chậu Cây Nhựa", img: "assets/wiki/wiki_img_19.jpg" },
                { name: "Đồ Chơi Nhựa", img: "assets/wiki/wiki_img_18.jpg" }
            ]
        },
        paper: {
            title: "Giấy & Carton",
            desc: "Giữ giấy luôn khô ráo, tháo gỡ keo, ghim bấm trước khi đem tái chế.",
            img: "assets/paper.png",
            examples: [
                { name: "Thùng Carton", img: "assets/wiki/wiki_img_9.jpg" },
                { name: "Báo Cũ", img: "assets/wiki/wiki_img_26.jpg" },
                { name: "Sách / Vở Ghi Chép", img: "assets/wiki/wiki_img_8.jpg" },
                { name: "Túi Giấy Tái Chế", img: "assets/wiki/wiki_img_14.jpg" },
                { name: "Ly Giấy Cà Phê", img: "assets/wiki/wiki_img_21.jpg" },
                { name: "Bao Bì Giấy", img: "assets/wiki/wiki_img_14.jpg" },
                { name: "Lõi Cuộn Giấy", img: "assets/wiki/wiki_img_29.jpg" },
                { name: "Thiệp Điện Tử Cũ", img: "assets/wiki/wiki_img_57.jpg" }
            ]
        },
        metal: {
            title: "Kim Loại",
            desc: "Đổ hết chất lỏng và rửa sơ bên trong các lon nước, vò bẹp (nếu là nhôm) để tiết kiệm không gian.",
            img: "assets/metal.png",
            examples: [
                { name: "Lon Nhôm (Nước Ngọt)", img: "assets/wiki/wiki_img_29.jpg" },
                { name: "Đồ Hộp Thiếc", img: "assets/wiki/wiki_img_9.jpg" },
                { name: "Khay Bạc Mỏng", img: "assets/wiki/wiki_img_27.jpg" },
                { name: "Mảnh Đồng / Thau", img: "assets/wiki/wiki_img_2.jpg" },
                { name: "Kẹp Sắt", img: "assets/wiki/wiki_img_18.jpg" },
                { name: "Chìa Khóa Cũ", img: "assets/wiki/wiki_img_14.jpg" },
                { name: "Đinh Ốc Vít", img: "assets/wiki/wiki_img_19.jpg" },
                { name: "Linh Kiện Nhôm", img: "assets/wiki/wiki_img_10.jpg" }
            ]
        },
        glass: {
            title: "Thủy Tinh",
            desc: "Tháo nắp trước khi bỏ. Cẩn thận với mảnh vỡ. Nên gói giấy báo nếu đã bị nát vụn.",
            img: "assets/glass.png",
            examples: [
                { name: "Chai Thủy Tinh", img: "assets/wiki/wiki_img_35.jpg" },
                { name: "Hũ Mứt / Hũ Yến", img: "assets/wiki/wiki_img_19.jpg" },
                { name: "Ly Thủy Tinh Vỡ", img: "assets/wiki/wiki_img_18.jpg" },
                { name: "Mặt Kính Cong", img: "assets/wiki/wiki_img_57.jpg" },
                { name: "Chai Rượu Chát", img: "assets/wiki/wiki_img_17.jpg" },
                { name: "Lọ Cắm Hoa", img: "assets/wiki/wiki_img_37.jpg" },
                { name: "Chén Dĩa Sứ", img: "assets/wiki/wiki_img_47.jpg" },
                { name: "Mảnh Vỡ Đóng Gói", img: "assets/wiki/wiki_img_40.jpg" }
            ]
        },
        organic: {
            title: "Rác Hữu Cơ",
            desc: "Thức ăn thừa mủn tự nhiên dùng để ủ phân compost thực vật. Tuyệt đối không để lẫn nilon hay xương động vật lớn.",
            img: "assets/organic.png",
            examples: [
                { name: "Vỏ Trái Cây", img: "assets/wiki/wiki_img_25.jpg" },
                { name: "Bã Cà Phê / Trà", img: "assets/wiki/wiki_img_59.jpg" },
                { name: "Cơm Thừa, Canh", img: "assets/wiki/wiki_img_23.jpg" },
                { name: "Lá Cây Khô", img: "assets/wiki/wiki_img_57.jpg" },
                { name: "Rau Héo Úa", img: "assets/wiki/wiki_img_17.jpg" },
                { name: "Vỏ Trứng Gà", img: "assets/wiki/wiki_img_36.jpg" },
                { name: "Trái Cây Hư", img: "assets/wiki/wiki_img_37.jpg" },
                { name: "Xương Nhỏ Xay", img: "assets/wiki/wiki_img_12.jpg" }
            ]
        },
        ewaste: {
            title: "Rác Điện Tử",
            desc: "Rác độc hại với hóa chất & linh kiện phức tạp. Tuyệt đối không ném vào thùng rác thường, phải gom ở Thùng Đỏ.",
            img: "assets/ewaste.png",
            examples: [
                { name: "Pin Tái Chế", img: "assets/wiki/wiki_img_26.jpg" },
                { name: "Bo Mạch Điện Tử", img: "assets/wiki/wiki_img_23.jpg" },
                { name: "Dây Sạc Hỏng / Đứt", img: "assets/wiki/wiki_img_16.jpg" },
                { name: "Điện Thoại Cũ", img: "assets/wiki/wiki_img_47.jpg" },
                { name: "Chuột Máy Tính", img: "assets/wiki/wiki_img_12.jpg" },
                { name: "Bàn Phím Hỏng", img: "assets/wiki/wiki_img_12.jpg" },
                { name: "Quạt Máy Tính", img: "assets/wiki/wiki_img_21.jpg" },
                { name: "Ổ Cứng / Thẻ Nhớ", img: "assets/wiki/wiki_img_27.jpg" }
            ]
        },
        textile: {
            title: "Rác Quần Áo (Vải)",
            desc: "Nên quyên tặng nếu còn tốt. Vải thủng rách, mục nát được gom vào máy công nghiệp để tái thành chỉ.",
            img: "assets/textile.png",
            examples: [
                { name: "Áo Thun Cũ / Rách", img: "assets/wiki/wiki_img_17.jpg" },
                { name: "Vải Vụn / Khăn Lau", img: "assets/wiki/wiki_img_2.jpg" },
                { name: "Giày Vải Đứt", img: "assets/wiki/wiki_img_29.jpg" },
                { name: "Túi Tote Sờn", img: "assets/wiki/wiki_img_35.jpg" },
                { name: "Quần Len Bị Sứt", img: "assets/wiki/wiki_img_2.jpg" },
                { name: "Chăn Mền Cũ Nát", img: "assets/wiki/wiki_img_36.jpg" },
                { name: "Gấu Bông Cũ", img: "assets/wiki/wiki_img_26.jpg" },
                { name: "Vỏ Bọc Ghế", img: "assets/wiki/wiki_img_59.jpg" }
            ]
        },
        danger: {
            title: "Chất Thải Nguy Hại",
            desc: "Các chai lọ chứa hóa chất ăn mòn, kim loại nặng cực độc (sơn, thủy ngân). Mang ra trạm thu gom đặc biệt.",
            img: "assets/danger.png",
            examples: [
                { name: "Bóng Đèn Huỳnh Quang", img: "assets/wiki/wiki_img_23.jpg" },
                { name: "Thùng Sơn Hóa Học", img: "assets/wiki/wiki_img_16.jpg" },
                { name: "Bình Phun Diệt Muỗi", img: "assets/wiki/wiki_img_8.jpg" },
                { name: "Nhiệt Kế Y Tế Cũ", img: "assets/wiki/wiki_img_40.jpg" },
                { name: "Chất Tẩy Rửa Cực Độc", img: "assets/wiki/wiki_img_16.jpg" },
                { name: "Dầu Nhớt Thải", img: "assets/wiki/wiki_img_37.jpg" },
                { name: "Thuốc Hết Hạn", img: "assets/wiki/wiki_img_36.jpg" },
                { name: "Bơm Kim Tiêm", img: "assets/wiki/wiki_img_25.jpg" }
            ]
        }
    },

    openWikiModal(type) {
        const data = this.wikiData[type];
        if (!data) return;

        document.getElementById('wiki-modal-title').textContent = data.title;
        document.getElementById('wiki-modal-desc').textContent = data.desc;
        document.getElementById('wiki-modal-img').src = data.img;

        const countEl = document.getElementById('wiki-modal-count');
        if (countEl) countEl.textContent = data.examples.length;

        document.getElementById('wiki-modal-examples').innerHTML = data.examples.map(ex => `
            <div style="background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: flex; flex-direction: column;">
                <img src="${ex.img}" alt="${ex.name}" style="width: 100%; height: 110px; object-fit: cover;">
                <div style="padding: 10px; text-align: center; font-size: 0.9rem; font-weight: 600; color: var(--text-main); flex-grow: 1; display: flex; align-items: center; justify-content: center;">${ex.name}</div>
            </div>
        `).join('');

        document.getElementById('wiki-modal').classList.remove('hidden');
    },

    closeWikiModal() {
        document.getElementById('wiki-modal').classList.add('hidden');
    },

    redeemReward(id, name, cost) {
        if (this.tokens < cost) {
            alert(this.lang === 'vi' ? "Bạn không đủ Green Tokens để đổi quà này!" : "Not enough Green Tokens!");
            return;
        }

        if (confirm(this.lang === 'vi' ? `Bạn có muốn đổi ${cost} tokens lấy ${name}?` : `Redeem ${name} for ${cost} tokens?`)) {
            this.tokens -= cost;
            this.updateTokenDisplay();
            alert(this.lang === 'vi' ? "Đổi quà thành công! Vui lòng nhận quà tại Văn phòng Đoàn." : "Redemption successful! Please collect your reward at the Office.");
        }
    }
};

document.addEventListener('DOMContentLoaded', () => AppState.init());
