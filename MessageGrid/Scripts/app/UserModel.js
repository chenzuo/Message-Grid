﻿function User(username, firstname, lastname) {
    var self = this;
    self.Id = ko.observable();
    self.Username = ko.observable(username);
    self.FirstName = ko.observable(firstname);
    self.LastName = ko.observable(lastname);
    return self;
}