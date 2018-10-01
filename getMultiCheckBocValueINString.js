function multiCheckBoxVal(chckbbxGrpName){

        var list = [];
            $('input[name="'+chckbbxGrpName+'"]:checked').map(function() {//opr_buss_channel[]
                    list.push($(this).val());
        });

        return list.toString();
 }

