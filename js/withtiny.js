$(function() {
	$.Tiny({
		// モデル(変数)
		variable: {
			todos: []
		},
		// イベントハンドラ
		controller: [
			{// addボタンクリック時の処理
				target: '#add_button',
				event: 'click',
				name: 'add'
			},

			{// delete allボタンクリック時の処理
				target: '#delete_all_button',
				event: 'click',
				name: 'delete_all'
			},
		],
		// モデル変更
		model: {
			init: function(variable) {

			},
			add: function(variable, e, src) {
				variable.todos.push($('#todo_text').val());
			},
			delete_all: function(variable, e, src) {
				variable.todos = [];
			},
		},
		// ビュー更新
		view: {
			init: function(variable) {

			},
			add: function(variable, e, src) {
				this.update(variable, e, src);
			},
			delete_all: function(variable, e, src) {
				this.update(variable, e, src);
			},
			update :function(variable, e, src) {
				var strHtml = '';
				variable.todos.forEach(function(todo) {
					strHtml += '<tr><td>' + todo + '</td></tr>';
				});
				$('#todo_table tbody').html(strHtml);
			}
		}
	});

});