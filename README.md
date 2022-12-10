# Nhóm 23: Chủ đề Vận dụng và phát triển AWS Polly
  # Thành viên Nhóm : 
  - Huỳnh Bảo Toàn         20161385
  - Vũ Trần Thành Công     20110448
  - Đào Xuân Trí           20110581


Đề tài: Xây dựng ứng dụng trên AWS & Tìm hiểu Polly và viết ứng dụng minh họa

## Các nội dung chính
- Tìm hiểu về Amazon Polly, PUBNUB
- Viết trang web ứng dụng Text to Speech để đọc văn bản, tài liệu và trang web
## Công nghệ sử dụng 
1. Amazon Polly
- Giới thiệu về amazon Polly: Amazon Polly là một dịch vụ chuyển đổi văn bản thành giọng nói trên nền tảng đám mây AWS. Cho phép người dùng tạo các ứng dụng có thể nói chuyện và phát triển những thể loại sản phẩm được trang bị khả năng nói hoàn toàn mới. Người dùng chỉ cần cho đầu vào là văn bản mà họ muốn chuyển đổi thành giọng nói trong Amazon Polly API.
- Là dịch vụ Text-to-Speech (TTS) sử dụng công nghệ deep learning tiên tiến để tổng hợp thành lời nói tự nhiên của con người, với hàng chục giọng nói chân thực theo nhiều ngôn ngữ, người dùng có thể xây dựng ứng dụng có giọng nói hoạt động ở nhiều nước khác nhau.
2. Amazon Web Services
- Amazon Web Services (AWS) là nền tảng đám mây toàn diện và được sử dụng rộng rãi nhất, cung cấp trên 200 dịch vụ đầy đủ tính năng từ các trung tâm dữ liệu trên toàn thế giới. Hàng triệu khách hàng—bao gồm các công ty khởi nghiệp tăng trưởng nhanh nhất, các tập đoàn lớn nhất cũng như các cơ quan hàng đầu của chính phủ—đều tin tưởng vào AWS để giảm chi phí, trở nên linh hoạt hơn và đổi mới nhanh hơn.
3. HTML, CSS, JavaScript
- HTML là tên viết tắt của HyperText Markup Language. HTML được giới thiệu là ngôn ngữ đánh dấu siêu văn bản.Và thay vì sử dụng ngôn ngữ lập trình để thực hiện các chức năng, HTML sử dụng các thẻ để xác định các loại nội dung khác nhau và mục đích phục vụ cho trang web. HTML là ngôn ngữ được sử dụng cho các tài liệu website.
- CSS là từ viết tắt của “Cascading Style Sheets”. Ngôn ngữ lập trình này quy định các thành phần HTML sẽ xuất hiện trên website như thế nào.
Với CSS sẽ giúp định hình kiểu nội dung này để trang web đó xuất hiện trước người dùng theo một cách đẹp hơn.
 -JavaScript hiểu theo nghĩa đơn giản hơn , nó chính là ngôn ngữ được sử dụng rộng rãi khi kết hợp với HTML/CSS để thiết kế web động
## Các bước cài đặt
### Bước 1: Tạo User trong IAM 
  Để nhận được Access Key ID và Secret access key

### Bước 2 Tạo PubNub và lấy key
![Picture1](https://user-images.githubusercontent.com/116050745/205501667-263d028e-7504-4210-a1ea-379bc5338603.png)
  - Sau đó dán publish và subscribe key vào trong chat.js
 ![Picture2](https://user-images.githubusercontent.com/116050745/205501665-d2a8614d-f17b-4bbd-abc8-6ea3c622e269.png)
    Chọn khu vực và add Accesskey và Secretkey đã tạo ở bước Users vào AWS-SDK
## Tiếp đến thực hiện viết các hàm javascript để thực hiện xử lý các chức năng:
  - Thêm tệp
  - Đọc nội dung tệp
  - Xác định dạng dữ liệu đầu vào: văn bản thuần túy hoặc SSML
  - Chuyển thành giọng nói
  - Nhận dạng giọng nói rồi chuyển thành văn bản
  - Tạo ra văn bản ngẫu nhiên có sẵn theo ngôn ngữ được chọn 
