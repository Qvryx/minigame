// 等页面加载完毕后执行
document.addEventListener('DOMContentLoaded', () => {
    const joinBtn = document.querySelector('.join-btn');
    
    // 给“加入房间”按钮添加点击事件
    joinBtn.addEventListener('click', () => {
        // 目前还没写具体逻辑，先弹个提示
        alert('加入房间功能即将开放，目前请先点击下方游戏创建房间哦！');
    });

    console.log('主页加载成功！');
});