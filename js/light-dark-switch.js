// 初始化主题
let currentTheme = localStorage.getItem('theme');
if (!currentTheme) {
  // 第一次访问，默认浅色 white
  currentTheme = 'light';
}
document.documentElement.setAttribute('theme', currentTheme);


let themeFunc = async function() {
    let btn = document.getElementById("theme-btn");
    let root = document.documentElement;
    btn.addEventListener('click', e => {
        if (root.getAttribute('theme') == 'dark') {
            root.setAttribute('theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            root.setAttribute('theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
};
themeFunc();

