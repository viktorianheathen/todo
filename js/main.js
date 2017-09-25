function createItem(todo_val)
{
	if(todo_val === "")
		{
			$('#todo_form').children('input').attr('placeholder', 'Введите название..');
			return false;
		}
	var new_elem = document.createElement('li');
	new_elem.className = "todo_item";
	
	
	var new_label = document.createElement('label');
	new_label.className = "todo_check_outer";
	
	var new_tumbler = document.createElement('span');
	new_tumbler.className = "tumbler";
	
	var new_check = document.createElement('input');
	new_check.type = "checkbox";
	
	
	
	var new_name = document.createElement('span');
	new_name.className = "todo_label";
	new_name.textContent = todo_val;
	
	
	var new_edit = document.createElement('button');
	new_edit.type = "button";
	new_edit.textContent = "Изменить";
	new_edit.className = "edit_item";
	
	var new_delete = document.createElement('button');
	new_delete.type = "button";
	new_delete.textContent = "Удалить";
	new_delete.className = "delete_item";
	
	
	new_elem.appendChild(new_label);
	new_label.appendChild(new_check);
	new_label.appendChild(new_tumbler);
	
	
	new_elem.appendChild(new_name);
	new_elem.appendChild(new_edit);
	new_elem.appendChild(new_delete);
	
	$('.todo_body ul').append(new_elem);

	
	bindEvents();
	completeTask();
	
}

/*------------------------------------------------------------------------------------------>*/

function completeTask()
{
	
	$('.todo_check_outer input').on('change', function(){
		
		$(this).closest('.todo_item').find('.todo_label').toggleClass('deleted');
		
	})
	
};

completeTask();

/*------------------------------------------------------------------------------------------>*/

function bindEvents()
{
	$('.todo_body').on('click', '.delete_item', function(){
		
		$(this).parent().fadeOut(300, function(){
			
			$(this).remove();
			
		});
		
		
	});
}
bindEvents();

/*------------------------------------------------------------------------------------------>*/

$('#todo_form').on('submit', function(event){
	
	event.preventDefault();
	var new_val = $(this).children('input').val();
	createItem(new_val);
	$(this).children('input').val('');
	
});