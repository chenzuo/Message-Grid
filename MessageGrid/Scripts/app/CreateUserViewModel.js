﻿function CreateUserViewModel() {
    var self = this;
    self.UserModel = new User();
    self.CreateUser = function () {
        var repo = new UserRepository();
        repo.CreateUser(self.UserModel);
        self.UserModel.UserName('');
        self.UserModel.FirstName('');
        self.UserModel.LastName('');
        self.UserModel.Password('');
    };
    return self;
}
