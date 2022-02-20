const $taskInputs = document.getElementsByClassName("addTask-value")[0];
const $taskButton = document.getElementsByClassName("addTask-trigger")[0];
const $taskList   = document.getElementsByClassName("todo-tasks")[0];
//クリックイベント
$taskButton.addEventListener("click",(e)=>{
    e.preventDefault();
    clickEvent();
})
//inputリセット、別関数発動
const clickEvent = ()=>{
    const taskInputs = $taskInputs.value;
    $taskInputs.value = "";
    addTask(taskInputs);
}
//タスク、deleteボタンの追加
const addTask = (taskInputs)=>{
    //タスクの追加
    const taskLi = document.createElement("li");
    const showItem = $taskList.appendChild(taskLi);
    showItem.textContent = taskInputs;
    //finishボタンの作成
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "finish";
    const deleteLi = taskLi.appendChild(deleteButton);
    //finishイベント
    deleteButton.addEventListener("click",(e)=>{
        e.preventDefault();
        finish(deleteButton);
    })

}
//finish
const finish = (deleteButton)=>{
    const targetLi = deleteButton.closest("li");
    $taskList.removeChild(targetLi);

};
console.log($taskButton);