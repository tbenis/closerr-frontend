
let opportunityFormHTML = `
<form id="opportunity-form">
    <h3>Add a new Volunteer Opportunity:</h3>
    <label for="opportunity-title" class="form-label">Title:</label>
    <input type="text" name="title" class="form-control" id="opportunity-title""><br>
    <label for="opportunity-time" class="form-label">Time:</label>
    <input type="text" name="time" class="form-control" id="opportunity-time""><br>
    <label for="opportunity-hours" class="form-label">Hours:</label>
    <input type="text" name="hours" class="form-control" id="opportunity-hours""><br>
    <label for="opportunity-location" class="form-label">Location:</label>
    <input type="text" name="location" class="form-control" id="opportunity-location""><br>
    <label for="company-name" class="form-label">Company Name:</label>
    <input type="text" name="companyName" class="form-control" id="company-name""><br>
    <label for="opportunity-description" class="form-label">Description:</label>
    <textarea type="text" class="form-control" name="description" id="opportunity-description"> </textarea><br>
    <label for"opportunity-category" class="form-label">Category:</label>
    <select class="form-select" id="category_id">
    </select> <br><br>
    <input type="submit" class="btn btn-primary" value="Create">
</form>
`;

const updateOpportunityForm = ({title, time, hours, location, companyName, description}, id) => {
    return `
    <label for="opportunity-title" class="form-label">Title:</label>
    <input type="text" name="title" id="opportunity-title" class="form-control" value="${title}"><br>
    <label for="opportunity-time" class="form-label">Time:</label>
    <input type="text" name="time" id="opportunity-time" class="form-control" value="${time}"><br>
    <label for="opportunity-hours" class="form-label">Hours:</label>
    <input type="text" name="hours" id="opportunity-hours" class="form-control" value="${hours}"><br>
    <label for="opportunity-location" class="form-label">Location:</label>
    <input type="text" name="location" id="opportunity-location" class="form-control" value="${location}"><br>
    <label for="company-name" class="form-label">Company Name:</label>
    <input type="text" name="companyName" id="company-name" class="form-control" value="${companyName}"><br>
    <label for="opportunity-description" class="form-label">Description:</label>
    <input type="text" name="description" id="opportunity-description" class="form-control" value="${description}"><br>
    <button class="update-opportunity btn btn-success" data-id="${id}">Update</button>
    <button class="delete-opportunity btn btn-danger" data-id="${id}" >Delete</button>
`;
}

const opportunityDisplay = ({title, time, hours, location, companyName, description, id}) => {
    // debugger
    return `
    <br>
    <p class="opportunity-title"><small>Title:</small> ${title}</p>
    <p class="company-name"> <small>Company:</small> ${companyName}</p>
    <p class="opportunity-time"><small>Time Frame:</small> ${time}</p>
    <p class="opportunity-hours"><small>Total Hours:</small> ${hours}</p>
    <p class="opportunity-location"><small>Location:</small> ${location}</p>
    <p class="opportunity-description"><small>Description:</small> ${description}</p>
    <button class="edit-listing btn btn-success" data-id="${id}">Edit</button>
    <button class="delete-listing btn btn-danger" data-id="${id}">Delete</button>
    `
}


