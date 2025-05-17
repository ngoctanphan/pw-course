## 🎓 **Lesson 03 - Git & JavaScript**

## 🔧 **GIT - Nâng cao với GitHub**

- **Thay đổi nội dung commit gần nhất**
    
    ```bash
    git commit --amend
    ```
    
- **Quy trình:**
    - Gõ `i` → Vào chế độ chỉnh sửa
    - Nhấn `Esc` để thoát
    - Gõ `:wq` → Lưu và thoát
    
    💡 Có thể dùng nhanh hơn:
    

```bash
git commit --amend -m "New message"
```

---

### ♻️ **Hoàn tác các thay đổi**

- **Từ Staging → Working Directory**
    
    ```bash
    git restore --staged <file>
    ```
    

👉 Trả file về trạng thái trước khi add

![image.png](attachment:78f5a05f-62d4-4925-9dd7-3f965054175e:image.png)

- **Từ Repository → Working Directory (Undo commit)**
    
    ```bash
    git reset HEAD~1
    ```
    
    ![image.png](attachment:d6f71859-9abd-469b-9d52-fe9eb290246c:image.png)
    

⚠️ Chỉ hoàn tác commit gần nhất!

---

### 🌿 **Branch - Làm việc với nhánh**

| Lệnh | Chức năng |
| --- | --- |
| `git branch <tên_nhánh>` | 🏗️ Tạo nhánh mới |
| `git checkout <tên_nhánh>` | 🔁 Chuyển sang nhánh |
| `git checkout -b <tên_nhánh>` | ⚡ Tạo và chuyển sang nhánh mới |

![image.png](attachment:5a31de5a-d5f2-4ad9-872c-fecb8bada34a:image.png)

🧠 Nhánh giúp làm việc độc lập, tránh ảnh hưởng tới **main**

---

### 🚫 **Loại trừ file khỏi commit**

Sử dụng file **`.gitignore`** để **bỏ qua file/thư mục**:

```
# Bỏ qua file cụ thể
secret.txt

# Bỏ qua cả thư mục
node_modules/
```

---

## ✨ **JAVASCRIPT - Tổng quan nâng cao**

### 📚 **Quy tắc đặt tên (Conventions)**

- snake_case_now_now
- kebab-case-now-now
- camelCaseNowNow
- PascalCaseNowNow

### 🧱 **Object**

```jsx
const user = {
  name: "John",
  age: 30
};
```

### 🔗 **Logical Operators (Toán tử logic)**

### 📦 **Array (Mảng)**

```jsx
const fruits = ["apple", "banana", "cherry"];
```

### 🛠️ **Function (Hàm)**

```jsx
function greet(name) {
  return "Hello " + name;
}

const result = greet("Alice");
```