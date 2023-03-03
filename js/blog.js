export function blog(e) {
  console.log("blogs be bloggin");

  //variables
  const addBlog = document.getElementsByClassName("addBlog")[0];
  const dialog = document.getElementById("blogDialog");
  const done = document.getElementById("Done");
  const cancel = document.getElementById("Cancel");
  const date = document.getElementById("date");
  const title = document.getElementById("title");
  const summary = document.getElementById("summary");

  date.max = new Date().toLocaleDateString("fr-ca");
  date.value = date.max;

  //Add Blog Button
  addBlog.addEventListener("click", () => {
    dialog.showModal();
  });

  //Cancel Button
  cancel.addEventListener("click", () => {
    date.value = date.max;
    title.value = "";
    summary.value = "";
    dialog.close();
  });

  //Submit Button
  done.addEventListener("click", () => {
    createBlog(title.value, date.value, summary.value);

    //Add to local storage
    const everything = [title.value, date.value, summary.value];
    localStorage.setItem(title.value, JSON.stringify(everything));

    //Reset Form
    date.value = date.max;
    title.value = "";
    summary.value = "";
    dialog.close();
  });

  e.preventDefault();
}

//A Create Blog Function
function createBlog(title, date, summary) {
  const list = document.getElementById("listBlog");
  const editDialog = document.getElementById("editDialog");
  const editDone = document.getElementById("editDone");
  const editCancel = document.getElementById("editCancel");
  const deleteDialog = document.getElementById("deleteDialog");
  const noDelete = document.getElementById("noDelete");
  const Delete = document.getElementById("Delete");

  //Create all the necessary parts for the new element
  const item = document.createElement("li");
  const content = document.createElement("p");
  const editBlog = document.createElement("button");
  const deleteBlog = document.createElement("button");

  //Setting the appropriate item contents
  item.title = title.value;
  content.innerHTML = tagPurify`${date} -- ${title}: ${summary}`;

  //Setting the appropriate edit contents
  editBlog.innerHTML = "Edit";
  editBlog.addEventListener("click", () => {
    const orgDate = document.getElementById("edate");
    const orgTitle = document.getElementById("etitle");
    const orgSummary = document.getElementById("esummary");
    orgDate.max = new Date().toLocaleDateString("fr-ca");

    console.log(orgDate.value);
    orgDate.value = date;
    orgTitle.value = title;
    orgSummary.value = summary;
    console.log(orgDate.value);
    editDialog.showModal();

    editCancel.addEventListener("click", () => {
      editDialog.close();
    });

    editDone.addEventListener("click", () => {
      item.title = orgTitle.value;
      content.innerHTML = tagPurify`${orgDate.value} -- ${orgTitle.value}: ${orgSummary.value}`;
      date = orgDate.value;
      title = orgTitle.value;
      summary = orgSummary.value;

      //Add to local storage
      const everything = [orgTitle.value, orgDate.value, orgSummary.value];
      localStorage.setItem(orgTitle.value, JSON.stringify(everything));

      editDialog.close();
    });
  });

  //Setting the appropriate Deleting contents
  deleteBlog.innerHTML = "Delete";
  deleteBlog.addEventListener("click", () => {
    deleteDialog.showModal();

    Delete.addEventListener("click", () => {
      localStorage.removeItem(title);
      item.remove();
      deleteDialog.close();
    });

    noDelete.addEventListener("click", () => {
      deleteDialog.close();
    });
  });

  //Adding everything to the list
  item.appendChild(content);
  item.appendChild(editBlog);
  item.appendChild(deleteBlog);
  list.appendChild(item);
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  //Default Blog Values
  const blog1 = ["Oh no", "2022-09-30", "School is going to scare me."];
  const blog2 = ["Happy New Year!", "2023-01-01", "Wow what a concept!"];
  const blog3 = ["Life is a struggle", "2023-01-21", "Hello World"];

  //Adding default blogs to the local storage
  localStorage.setItem(blog1[0], JSON.stringify(blog1));
  localStorage.setItem(blog2[0], JSON.stringify(blog2));
  localStorage.setItem(blog3[0], JSON.stringify(blog3));

  //Looping through and creating the Default Blogs
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));

    createBlog(value[0], value[1], value[2]);
  }
});

function tagPurify(strings, ...values) {
  const dirty = strings.reduce(
    (prev, next, i) => `${prev}${next}${values[i] || ""}`,
    ""
  );
  return DOMPurify.sanitize(dirty);
}
