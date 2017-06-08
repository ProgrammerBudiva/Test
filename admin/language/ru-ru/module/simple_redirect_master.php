<?php
// Heading
$_['heading_title']    = 'Simple Redirect Master';

$_['text_module']      = 'Модули';
$_['text_edit']        = 'Редактирование редиректов';
$_['text_add_redirect'] = 'Добавление нового редиректа';
$_['text_advanced'] = 'Расширенный поиск';
$_['text_ajax_no_response'] = 'Неизвестная ошибка. Сервер не ответил. Попробуйте позже...';
$_['text_confirm_delete'] = 'Вы уверены что хотите удалить эту запись?';
$_['text_confirm_leave_page'] = 'Несохранненые данные потеряются. Продолжить?';
$_['text_developer'] = 'Simple Redirect Master v%1$s<br>&copy; %2$s %3$s.<br>Если у вас есть вопросы, возникли проблемы с модулем или есть предложения, пишите мне: <a href="mailto:%4$s">%4$s</a>';
$_['text_not_show_again'] = 'Больше не показывать';
$_['text_pre_action_content'] = 'Содержимое файла регистрации предварительного действия';
$_['text_search'] = 'Поиск';
$_['text_success_add'] = 'Редирект успешно добавлен!';
$_['text_success_delete_redirect'] = 'Редирект успешно удален!';
$_['text_success_save_redirect'] = 'Редирект успешно изменен!';
$_['text_success_warning_disable'] = 'Предупреждение отключено!';
$_['text_success_warning_action_pre_action'] = 'Предварительное действие успешно зарегестрированно!';
$_['text_code_301'] = 'Постоянный редирект (301 Moved Permanently)';
$_['text_code_302'] = 'Временный редирект (302 Found)';

// Entry
$_['entry_status'] = 'Статус';

// Error
$_['error_permission'] = 'У вас нет прав, чтоб изменять настройки этого модуля!';
$_['error_add_redirect'] = 'Не удалось добавить редирект!';
$_['error_ajax'] = 'Ощибка';
$_['error_delete_redirect'] = 'Не удалось удалить редирект!';
$_['error_empty_from'] = 'Значение "редирект с" не может быть пустым';
$_['error_empty_redirect_id'] = 'Не удалось найти редирект! Попробуйте перезагрузить страницу.';
$_['error_empty_to'] = 'Значение "редирект на" не может быть пустым';
$_['error_from_not_unique'] = 'Такое значение "редирект с" уже существует. Вы можете воспользоваться поиском, чтоб найти его.';
$_['error_pre_action_file_not_writable'] = 'Файл в котором должно быть зарегестрированно предварительное действие защищен от записи!';
$_['error_request'] = 'Ошибка, только POST запросы разрешены';
$_['error_save_redirect'] = 'Ошибка во время сохранения редиректа!';
$_['error_warning_type'] = 'Не разрешено!';
$_['error_from_to_same'] = 'Значения "редирект с" и "редирект на" не могут быть одинаковыми!';
$_['error_warning_action_pre_action'] = 'Не удалось зарегестрировать предварительное действие.';

// Action
$_['action_add_pre_action'] = 'Зарегестрировать';

// Button
$_['button_create'] = 'Создать';
$_['button_ok'] = 'Хорошо';
$_['button_no'] = 'Нет';
$_['button_yes'] = 'Да';

// Column
$_['column_from'] = 'Редирект с';
$_['column_to'] = 'Редирект на';
$_['column_code'] = 'Код редиректа';
$_['column_status'] = 'Статус';
$_['column_action'] = 'Действия';

// Entry
$_['entry_from'] = 'Редирект с';
$_['entry_to'] = 'Редирект на';
$_['entry_code'] = 'Код редиректа';
$_['entry_status'] = 'Статус';
$_['entry_per_page'] = 'Показывать на странице';

// Help
$_['help_from'] = 'Откуда будет происходить редирект, напр. /products-old';
$_['help_to'] = 'Куда будет перенаправлятся, например: /products';
$_['help_code'] = 'Код редирект который должен вернуть сервер, если вы переместили страницу на другой адрес и хотите, чтоб поисковые системы забыли о старой ссылки и узнали о новой, вы должны выбрать 301 код';
$_['help_pre_action_file_manual_insert'] = 'Вы можете добавить содержимое ниже в файл <code>%s</code>.';

// Warning
$_['warning_no_pre_action'] = 'Не найдена регистрация предварительного действия. Модуль не будет работать без этого!';