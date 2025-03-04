// 当页面加载完成后，再给按钮绑定交互逻辑
document.addEventListener("DOMContentLoaded", () => {
    // showMoreInfo函数：点击“了解更多”按钮后执行
    window.showMoreInfo = function() {
        alert("感谢关注本项目！我们致力于通过影像和设计赋能乡村电商，助力品牌升级。");
    };
});
