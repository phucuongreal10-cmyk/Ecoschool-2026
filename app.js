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
        scanner_title: "AI Waste Scanner",
        scanner_subtitle: "Công nghệ nhận diện rác thải tiên tiến",
        upload_title: "Chụp ảnh hoặc tải lên",
        upload_desc: "AI sẽ tự động phân loại rác giúp bạn",
        btn_upload: "Chọn ảnh",
        result_title: "Kết quả phân tích AI",
        confidence: "Độ chính xác:",
        btn_confirm: "Xác nhận đã tái chế",
        btn_rescan: "Quét lại",
        dashboard_title: "Thống kê Tác động",
        dashboard_subtitle: "Dữ liệu thực tế từ toàn trường",
        filter_personal: "Cá nhân",
        filter_class: "Lớp 9A",
        filter_grade: "Khối 9",
        filter_school: "Toàn trường",
        chart_waste_title: "Phân loại rác thải",
        chart_trend_title: "Xu hướng hàng tháng",
        wiki_title: "Hướng dẫn Tái chế",
        wiki_subtitle: "Tra cứu nhanh cách xử lý các loại rác phổ biến",
        wiki_plastic: "Nhựa (Plastic)",
        wiki_plastic_do1: "Rửa sạch chai lọ",
        wiki_plastic_do2: "Bóp bẹp để tiết kiệm chỗ",
        wiki_plastic_dont: "Không bỏ ống hút nhựa nhỏ",
        wiki_paper: "Giấy (Paper)",
        wiki_paper_do1: "Giữ giấy khô ráo",
        wiki_paper_do2: "Xếp gọn thùng carton",
        wiki_paper_dont: "Không bỏ giấy dính dầu mỡ",
        wiki_metal: "Kim loại (Metal)",
        wiki_metal_do1: "Vỏ lon nhôm, hộp thiếc",
        wiki_metal_do2: "Rửa sạch thức ăn thừa",
        wiki_metal_dont: "Không bỏ pin/thiết bị điện tử",
        wiki_glass: "Thủy tinh (Glass)"
    },
    en: {
        nav_home: "Home",
        nav_scan: "AI Scan",
        nav_stats: "Statistics",
        nav_wiki: "Guide",
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
        scanner_title: "AI Waste Scanner",
        scanner_subtitle: "Advanced Waste Recognition Technology",
        upload_title: "Snap or Upload",
        upload_desc: "AI will automatically classify waste for you",
        btn_upload: "Select Photo",
        result_title: "AI Analysis Result",
        confidence: "Confidence:",
        btn_confirm: "Confirm Recycled",
        btn_rescan: "Scan Again",
        dashboard_title: "Impact Dashboard",
        dashboard_subtitle: "Real-time data from the whole school",
        filter_personal: "Personal",
        filter_class: "Class 9A",
        filter_grade: "Grade 9",
        filter_school: "Whole School",
        chart_waste_title: "Waste Composition",
        chart_trend_title: "Monthly Trend",
        wiki_title: "Recycling Guide",
        wiki_subtitle: "Quick lookup for common waste types",
        wiki_plastic: "Plastic",
        wiki_plastic_do1: "Rinse bottles",
        wiki_plastic_do2: "Flatten to save space",
        wiki_plastic_dont: "No small plastic straws",
        wiki_paper: "Paper",
        wiki_paper_do1: "Keep paper dry",
        wiki_paper_do2: "Flatten cardboard boxes",
        wiki_paper_dont: "No greasy paper",
        wiki_metal: "Metal",
        wiki_metal_do1: "Aluminum cans, tin cans",
        wiki_metal_do2: "Rinse food residue",
        wiki_metal_dont: "No batteries/electronics",
        wiki_glass: "Glass"
    }
};

const AppState = {
    lang: 'vi', // 'vi' or 'en'
    scope: 'personal',
    currentPage: 'home',
    lastFileName: '',

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
        document.querySelectorAll('.wiki-tabs .filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');

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
        const msg = this.lang === 'vi'
            ? "🎉 Đã xác nhận tái chế! Bạn nhận được +10 Green Tokens."
            : "🎉 Recycled Confirmed! You got +10 Green Tokens.";
        alert(msg);
        this.resetScanner();
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

        if (this.scope === 'personal') {
            co2 = 24.5; waste = 150; trees = 12;
            const subtitle = document.querySelector('.section-header p');
            if (subtitle) subtitle.textContent = "Dữ liệu của: Nguyễn Văn A - Lớp 9A1";
        } else if (this.scope === 'class') {
            const className = document.getElementById('class-select').value || '9A1';
            const seed = className.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
            baseMult = 20;
            co2 = Math.floor(500 + (seed % 100));
            waste = Math.floor(3000 + (seed % 500));
            trees = Math.floor(200 + (seed % 50));
            const subtitle = document.querySelector('.section-header p');
            if (subtitle) subtitle.textContent = `Dữ liệu lớp: ${className}`;
        } else if (this.scope === 'grade') {
            const grade = document.getElementById('grade-select').value;
            baseMult = 100;
            co2 = 2000 + (grade * 100);
            waste = 12000 + (grade * 500);
            trees = 800 + (grade * 20);
            const subtitle = document.querySelector('.section-header p');
            if (subtitle) subtitle.textContent = `Dữ liệu Khối ${grade}`;
        } else { // School
            baseMult = 400;
            co2 = 8500; waste = 45000; trees = 3200;
            const subtitle = document.querySelector('.section-header p');
            if (subtitle) subtitle.textContent = "Toàn trường THCS Eco School";
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
        setTimeout(() => this.setStatsScope('personal'), 100);
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
