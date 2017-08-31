function DemoObject(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    alert("11111111111111111111");

    this.alert_msg = function() {
      alert("kkkkkkkkkkkk");
    };
    this.setAge = function(age) {
      alert(this.name);
      // this.alert_msg();
      // alert(this.age + age);
    };
    this.getName = function() {
        return this.name;
    };
    this.getJob = function(sig) {
        return "[" + sig + "]" + this.job;
    };
}
