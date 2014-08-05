# AngularJS Dynamic Attribute


## Why use Dynamic Attribute

什么情况下会需要动态绑定 ng-model 呢？若你的数据结构长得像是下面这样：

		$scope.classes = [
			{
				"Name": "柯织",
				"Options" : ["A" , "B", "C"]
			},
			{
				"Name": "雷朋",
				"Options" : ["A" , "B" , "C" ]
			}
		];


此时你需要用 ng-repeat 将数据展开，并且将 Options 个别设置为 ng-options 的数据，此时就须要动态去绑定 ng-model，那么该如何绑呢？你可能需要在你的 Controller 底下加上一个变量来做这些动态呈现的 ng-options 的数据指定。


## Thanks

this project is base on angular-seed — the seed for AngularJS apps


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Welcome fork and feedback

在issue提问或邮件shiren1118@126.com

## License

this project is released under the [MIT License](http://www.opensource.org/licenses/MIT).