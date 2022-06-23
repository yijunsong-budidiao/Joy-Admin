const codeList: any = {
	javascript: `for (let i = 0; i < 3; i++) {
    console.log('hello world')
}`,
	html: `<html>
	<head>
			<style>
			h1 {
					font-size: 30px; 
					color: red;
			}
			</style>
	</head>
	<body style="background-color:white">
			<h1>Hello HTML/CSS/JS! Hot reload!</h1>
			<script>
					console.log('hello world!')
			</script>
	</body>
</html>`,
	json: `{
    name:'张三',
    gender:'男',
    age:20
}`,
	markdown: `## 欢迎使用markdown
	+ 简单
	+ 好用
	`,
	cpp: `#include <iostream>
using namespace std;
	 
// main() 是程序开始执行的地方
	 
int main()
{
		cout << "Hello World"; // 输出 Hello World
		return 0;
}`,
	java: `import java.util.Scanner;

public class Main {
	
		public static void main(final String[] args) {
				System.out.println("What's your name?");
				Scanner scanner = new Scanner(System.in);
				String a = scanner.nextLine();
				System.out.println("Hello, " + a);
		}
	
}`,
	php: `<!DOCTYPE html>
<html>
<body>

<?php
echo "Hello World!";
?>

</body>
</html>	
`,
	python: `#!/usr/bin/python

print ("Hello, Python!")`,
	rust: `[package]
name = "my-project"
version = "0.1.0"
authors = ["runner"]
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]`,
	sql: `SHOW DATABASES;`
};
export default codeList;
