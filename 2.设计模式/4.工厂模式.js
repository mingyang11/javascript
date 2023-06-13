/**
 * 简单工厂模式：
 *  优点：只需要一个正确的参数就可以获取到所需的对象，而无需知道创建的具体细节，但是在函数内包含了所有对象的创建逻辑和判断逻辑代码，每增加新的构造函数还需要修改判断逻辑代码，
 *       当我们的对象更多时，这个函数会成为一个庞大的超级函数，便难以维护。所以简单工厂只能作用于创建的对象数量较少，对象的创建逻辑不复杂的时候使用
 */

// ES5写法
// function UserFactory(role) {
//   function User(role1, pages) {
//     this.role = role1;
//     this.pages = pages;
//   }
//   let pages = [];
//   switch (role) {
//     case 'superadmin':
//       pages = ['home', 'user-manage', 'right-manage', 'news-manage'];
//       break;
//     case 'admim':
//       pages = ['home', 'user-manage', 'news-manage'];
//       break;
//     case 'editor':
//       pages = ['home', 'news-manage'];
//       break;
//     default:
//       throw new Error('输入错误');
//       break;
//   }
//   return new User(role, pages);
// }

// console.log(UserFactory('editor'));

// class方式实现;
// class User {
//   constructor(role, pags) {
//     this.role = role;
//     this.pags = pags;
//   }

//  静态方法：指不需要实例化就可以调用的方法
//   static Userfactory(role, pages) {
//     switch (role) {
//       case 'superadmin':
//         return new User(role, [
//           'home',
//           'user-manage',
//           'right-manage',
//           'news-manage',
//         ]);
//         break;
//       case 'admim':
//         return new User(role, ['home', 'user-manage', 'news-manage']);
//         break;
//       case 'editor':
//         return new User(role, ['home', 'news-manage']);
//         break;

//       default:
//         throw new Error('输入错误');
//         break;
//     }
//   }
// }
// console.log(User.Userfactory('admim'));

/**
 * 抽象工厂模式：
 */
// class User {
//   constructor(name, role, pages) {
//     this.name = name;
//     this.role = role;
//     this.pages = pages;
//   }
//   welcome() {
//     console.log('welcome');
//   }
//   dataShow() {
//     throw new Error('抽象方法需要被实现');
//   }
// }
// class Superadmin extends User {
//   constructor(name) {
//     super(name, '超级管理员', [
//       'home',
//       'user-manage',
//       'right-manage',
//       'news-manage',
//     ]);
//   }
//   dataShow() {
//     console.log('超级管理员');
//   }
//   addRight() {
//     console.log('添加权限');
//   }
//   addUser() {
//     console.log('添加用户');
//   }
//   editArticle() {
//     console.log('写文章');
//   }
// }
// class Admin extends User {
//   constructor(name) {
//     super(name, '管理员', ['home', 'user-manage', 'news-manage']);
//   }
//   dataShow() {
//     console.log('管理员');
//   }
//   addUser() {
//     console.log('添加用户');
//   }
//   editArticle() {
//     console.log('写文章');
//   }
// }
// class Editor extends User {
//   constructor(name) {
//     super(name, '作者', ['home', 'news-manage']);
//   }
//   dataShow() {
//     console.log('作者');
//   }
//   editArticle() {
//     console.log('写文章');
//   }
// }

// function getAbstractUserFactory(role) {
//   switch (role) {
//     case '超级管理员':
//       return Superadmin;
//       break;
//     case '管理员':
//       return Admin;
//       break;
//     case '作者':
//       return Editor;
//       break;

//     default:
//       throw new Error('输入错误');
//       break;
//   }
// }

// const SuperMan = getAbstractUserFactory('超级管理员');
// const superUser = new SuperMan('楚泽');
// console.log(superUser);

// const manager = getAbstractUserFactory('管理员');
// const manager1 = new manager('小唐');
// console.log(manager1);

// const zuozhe = getAbstractUserFactory('作者');
// const zuozhe1 = new zuozhe('唐老师');
// console.log(zuozhe1);
