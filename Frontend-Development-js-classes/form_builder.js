// q4_form_builder.js

class FormBuilder {
    constructor(fields) {
        this.fields = fields; // Array of field objects
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        let formHTML = '<form id="dynamicForm">';

        this.fields.forEach(field => {
            formHTML += `
                <div class="form-group">
                    <label>${field.label}</label>
                    <input type="${field.type}" name="${field.label.toLowerCase()}" id="${field.label.toLowerCase()}" required>
                </div>`;
        });

        formHTML += '<button type="button" onclick="builder.getFormData()">Submit</button>';
        formHTML += '</form>';
        
        container.innerHTML = formHTML;
    }

    getFormData() {
        const data = {};
        this.fields.forEach(field => {
            const id = field.label.toLowerCase();
            const element = document.getElementById(id);
            if (element) data[field.label] = element.value;
        });
        
        console.log("Form Data Submitted:", data);
        alert(JSON.stringify(data)); // Visual feedback
        return data;
    }
}

// Usage Example:
// const fields = [{type: 'text', label: 'Username'}, {type: 'password', label: 'Password'}];
// const builder = new FormBuilder(fields);
// builder.render('form-container'); // Assuming <div id="form-container"> exists