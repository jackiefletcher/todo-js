describe("todo", function() {
  it("will return task from a saved todo object when called on using .task", function(){
    var saved_task = todo("current-projects", "stuff", "2012-12-10");
    expect(saved_task.task).to.equal("stuff");
  })
});
