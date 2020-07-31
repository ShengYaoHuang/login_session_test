# 帳號密碼檢查機制
帳號密碼檢查機制

# 功能描述
- 輸入正確的Email及密碼可顯示歡迎頁面
- 輸入錯誤的Email及密碼會顯示輸入錯誤!

# 測試資料
| name    |        email        |         password |
| :------ | :-----------------: | ---------------: |
| Tony    |   tony@stark.com    |       iamironman |
| Steve   | captain@hotmail.com | icandothisallday |
| Peter   |  peter@parker.com   |         enajyram |
| Natasha |  natasha@gamil.com  |       *parol#@$! |
| Nick    |   nick@shield.com   |         password |


# 預覽圖片
![sparkles](accountlogin.png)

# 環境建置與需求
- Node.js: v10.15.0
- Express: v4.17.1
- Express-Handlebars: v5.1.0
- body-parser: v1.19.0

# 安裝與執行步驟
1. 下載專案
> git clone https://github.com/ShengYaoHuang/account_login.git

2. 進入專案資料夾
> cd account_login

3. 下載套件
> npm install

4. 執行程式
> npm run dev
