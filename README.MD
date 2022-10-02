# Note

-   repo: repository
-   local: máy chúng ta
-   remote: trên Github
-   conflict: xung đột code

```bash
# xem trạng thái repo
git status
```

# Khi chưa có repo ở local (lần đầu tiên mang repo về local)

```bash
git clone https://github.com/phamhongquan-it/SPCK-JSA26.git
```

# Quy trình

## Trước khi bắt đầu code

> Tức là cứ mỗi khi mở máy lên code

```bash
# chạy git pull để update code từ remote về local (giả sử như có người đã push code lên rồi, thì git pull sẽ lấy code mới đó về và ghép vào code cũ)

git pull
```

## Sau khi code xong và chuẩn bị push code lên remote

-   Thực hiện git pull 1 lần nữa (để đảm bảo là không bị conflict), nhưng bước này rất dễ bị conflict bởi vì rất có thể trong lúc mình code, thì người khác cũng code và push lên trước mất rồi (tình huống này cần phải sửa conflict và push lên lại).

-   Thêm toàn bộ code đã viết vào vùng theo dõi để chuẩn bị đưa lên git

```bash
git add .
```

-   Lưu lại thay đổi ở trên local

```bash
git commit -m "Message (VD: update feature A)"
```

-   Push lên trên remote

```bash
git push
```

# Conflict

Xảy ra khi có 2 người cùng sửa đổi 1 file

VSCode sẽ hỗ trợ đánh dấu các phần bị conflict, chúng ta sẽ phải lựa chọn là giữ lại phần nào hoặc giữ cả 2, sau khi sửa xong conflict thì thực hiện lại quy trình trên.
