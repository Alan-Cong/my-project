// 页面加载后绑定交互事件
document.addEventListener('DOMContentLoaded', function() {
  // “了解更多”按钮点击后执行的函数
  window.showMoreInfo = function() {
    alert("本项目通过影像与设计赋能，助力乡村振兴，感谢关注！");
  };

  // “更多信息”显示/折叠功能
  window.toggleMore = function() {
    const moreInfo = document.getElementById('more-info');
    if (moreInfo.style.display === 'block') {
      moreInfo.style.display = 'none';
    } else {
      moreInfo.style.display = 'block';
    }
  };
});
