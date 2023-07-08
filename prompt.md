# 民宿客房管理系統

## 1. 簡介

本文件提供了一個簡易型的民宿客房管理系統的詳細系統需求。該系統將提供民宿業者管理客房預訂、入住、退房，並記錄客戶基本資訊。

## 2. 總體描述

2.1 系統介面
2.1.1 使用者界面：應以網頁方式提供系統的操作介面，使使用者能夠容易理解並使用。

2.2 系統特性
2.2.1 客房管理：提供客房預訂、入住、退房等流程的管理功能。
2.2.2 客戶基本資料記錄：能記錄並查詢客戶的基本資料。

## 3. 系統功能需求

3.1 客房預訂管理
3.1.1 預訂：使用者可以為客人進行房間預訂。
3.1.2 修改預訂：可修改已預訂的房間數量、房型和入住日期等信息。
3.1.3 取消預訂：可取消已預訂的房間。

3.2 客房入住和退房管理
3.2.1 入住：使用者可以為客人辦理入住手續。
3.2.2 退房：使用者可以為客人辦理退房手續。

3.3 客戶基本資料記錄
3.3.1 新增資料：使用者可以為新客人新增基本資料。
3.3.2 修改資料：使用者可以修改已記錄客人的基本資料。
3.3.3 查詢資料：使用者可以查詢客人的基本資料。

# 系統技術需求

以 TypeScript 撰寫 *.ts 檔。請附上 tsconfig.json。
使用 <script type="module"> 引用 module js，不要使用 require()。
網頁內文使用繁體中文。

# 客戶資料
1. 欄位: 客戶代碼、姓名、稱謂、行動電話、備註

# 訂房資訊
1. 欄位: 訂房代碼、客戶代碼、日期、房號(多筆)、總價、已付訂金金額 已付清、備註

# 系統功能
1. index.html 首頁顯示未來訂房紀錄
2. 首頁可新增訂房紀錄及新增客戶資訊
3. 連結到另一頁可查所有訂房紀錄
4. 新增訂房紀錄時可同時新增客戶資訊

# 重要資訊

必須使用 TypeScript 撰寫 *.ts 檔，不要產出 *.js 檔。