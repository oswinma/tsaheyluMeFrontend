import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

const urllink = '/api/user/avatar/update';

@Component({
  selector: 'app-user-basic',
  templateUrl: './user-basic.component.html',
  styleUrls: ['./user-basic.component.css'],
})
export class UserBasicComponent implements OnInit {
  password_box = false;
  showOverlay = false;
  currentUser: User;
  token = localStorage.getItem('access_token') || '';

  constructor(private userService: UserService) {
    this.currentUser = {
      id: 0,
      email: '',
      nickname: '',
      country: '',
      language: '',
      avatarURL: '',
      status: 0,
      signuptime: new Date('1'),
      password: '',
      favurlSubscription: true,
      emailSubscription: true,
    };
  }

  public uploader: FileUploader = new FileUploader({
    url: urllink,
    method: 'POST',
    allowedFileType: ['jpg'],
    autoUpload: true,
    authTokenHeader: 'Authorization',
    // maxFileSize: 20000,
    authToken: this.token,
  });

  selectedFileOnChanged(event: any) {
    console.log(event);
    // this.uploadFileHandel() ;
  }

  uploadFileHandel() {
    this.uploader.queue[0].onSuccess = function (response, status, headers) {
      // 上传文件成功
      if (status == 200) {
        // 上传文件后获取服务器返回的数据
        let tempRes = JSON.parse(response);
        console.log(tempRes);
      } else {
        // 上传文件后获取服务器返回的数据错误
      }
    };

    this.uploader.queue[0].upload(); // 开始上传
  }

  ngOnInit(): void {
    if (this.userService.currentUser) {
      this.currentUser = this.userService.currentUser;

      // console.log('get');
    } else {
      this.getUserBasicInfo();
      // console.log('not get');
    }
  }
  getUserBasicInfo() {
    // this.userService.getBasicInfo().subscribe((result) => {
    //   // console.log(data);
    //   this.currentUser = result.data;
    //   this.userService.currentUser = this.currentUser;
    // });
    // this.currentUser = this.userService.currentUser;
  }

  overlayClick(): void {
    this.showOverlay = false;
    this.password_box = false;
  }
}
