$(function() {
	// モデル
	var todos = [];
	
	// addボタンクリック時の処理
	$('#add_button').click(function(e) {
		todos.push($('#todo_text').val());	// モデルを更新
		updateView();	// ビューを更新
	});

	// delete allボタンクリック時の処理
	$('#delete_all_button').click(function(e) {
		todos = [];	// モデルを更新
		updateView();	// ビューを更新
	});

	// ビューを更新
	function updateView() {
		var strHtml = '';
		todos.forEach(function(todo) {
			strHtml += '<tr><td>' + todo + '</td></tr>';
		});
		$('#todo_table tbody').html(strHtml);
	}
});