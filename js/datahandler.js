$(document).ready(function () {

      function loadTable() {
        $.ajax({
          url: '/getFeedbackquestion',
          type: "GET",
          success: function (data) {
            console.log(data);
            console.log(data[0]['questionId']);
            $('#datahandlertbody').html("");
            for (let i = 0; i < data.length; i++) {
              // const element = data[i];
              $('#datahandlertbody').append(`  <tr>
              <th scope="row" id="questionid${i + 1}">${i + 1}</th>
              <td id="question1" queno=${data[i]['questionId']}>${data[i]['questions']}</td>
              <td>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#questionmodal${i + 1}">Add Answer</button>
                <button type="button" class="btn btn-danger" id="Deletequestionanswer">Delete</button>


              </td>
              <td>
                <div id="answerbox" name=${data[i]['questionId']}>
${data[i]['answers']}
                </div>
              </td>
            </tr>
            
            
            `);

$('body').append(`<div class="modal fade" id="questionmodal${i + 1}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form action="" name="answerform" id="answerform" queno=${data[i]['questionId']}>
        <div class="modal-body">

            <textarea name="answerbox1textarea" id="answerbox1textarea" cols="50" rows="05"
              placeholder="Enter Your answer"></textarea>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" id="modalsave">Save changes</button>

        </div>
        </form>
      </div>
    </div>
  </div>
            `);


            }
            // if (data.status == 'false') {
            //     $('#data-table').append('<tr><td colspan="5">' + data.message + '</td></tr>');
            // } else {
            //     $.each(data, function(key, value) {
            //         $('#data-table').append('<tr data-rid=' + value.id + '> <td>' + value.id + '</td> <td>' + value.name + '</td> <td>' + value.age + '</td> <td>' + '<button class="edit-btn" data-id=' + value.id + '>Edit</button>' + '</td> <td> <button class="delete1" data-eid=' + value.id + '>Delete</button></td> <td><input type="checkbox" class="cdelete" value="' + value.id + '" name="cdelete" data-muldid="cdelete"> </td></tr>');
            //     })
            // }
          }

        })
      }
      loadTable();

      $(document).on('submit','#answerform', function (e) {
        e.preventDefault();
            // var arr = $(this).serializeArray();
            // var answer=e.target.childNodes[1].childNodes[1].value
            const questionNo=$(e.target).attr('queno')
            console.log($(`#answerbox[name=${questionNo}]`))
            $(`#answerbox[name=${questionNo}]`).html(`
              <p>${e.target.childNodes[1].childNodes[1].value}</p>
            `)
            console.log(e.target.childNodes[1]);
            console.log(e.target.childNodes[1].childNodes[1].value);
var obj={
  feedbackans:e.target.childNodes[1].childNodes[1].value,
  feedbackque:questionNo

}
console.log(obj)

            $.ajax({
          url: '/setFeedbackquestion',
          type: "post",
          data : obj,
          // data:
          success: function (data) {
            console.log(data);

            loadTable();
          }

        })

      })



    })