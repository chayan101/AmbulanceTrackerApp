$(document).ready(function() {
            $('#btnSubmit').click(function(e) {
                var isValid = true;
                $('input[type="text"]').each(function() {
                    if ($.trim($(this).val()) == '') {
                        isValid = false;
                        $(this).css({
                            "border": "1px solid red",
                            "background": "#FFCECE"
                        });
                    }
                    else {
                        var go_to_url = $("#idForm").find(":selected").val();
                        document.location.href = go_to_url;
                        $(this).css({
                            "border": "",
                            "background": ""
                        });
                    }
                });
                if (isValid == false) 
                    e.preventDefault();

                    $('input[type="password"]').each(function() {
                    if ($.trim($(this).val()) == '') {
                        isValid = false;
                        $(this).css({
                            "border": "1px solid red",
                            "background": "#FFCECE"
                        });
                    }
                    else {
                        var go_to_url = $("#idForm").find(":selected").val();
                        document.location.href = go_to_url;
                        $(this).css({
                            "border": "",
                            "background": ""
                        });
                    }
                });
                if (isValid == false) 
                    e.preventDefault();
            });
        });