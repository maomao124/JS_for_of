/**
 * Project name(项目名称)：JS_for_of
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/2
 * Time(创建时间)： 21:27
 * Version(版本): 1.0
 * Description(描述)： 无
 */

// 定义一个数组
var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// 使用 for of 循环遍历数组中的每个元素
for (var value of arr)
{
    document.write(value + ", ");
}
document.write("<br>");
// 定义一个字符串
var str = "Hello World!";
// 使用 for of 循环遍历字符串中的每个字符
for (var value of str)
{
    document.write(value + ", ");
}
document.write("<br>");
// 定义一个对象
var obj = {"name": "Clark", "surname": "Kent", "age": "36"};
// 使用 for of 循环遍历对象中的所有属性
for (var value in obj)
{
    document.write(value + ", ");
}