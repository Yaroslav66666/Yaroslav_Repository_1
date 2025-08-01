$(document).ready(function () {
    const nameInput = $('.inputName');
    const numberInput = $('.inputNumber');
    const idInput = $('.inputId');
    const addButton = $('.button');
    const contactContainer = $('.contact-list'); 

    
    function getContacts() {
        const contacts = localStorage.getItem('contacts');
        return contacts ? JSON.parse(contacts) : [];
    }

    
    function saveContacts(contacts) {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }


    function renderContacts() {
        contactContainer.empty(); 
        const contacts = getContacts();

        contacts.forEach(contact => {
            const contactElement = $(`
                <div style="
                    padding: 15px;
                    margin-bottom: 15px;
                    border: 1px solid #333;
                    border-radius: 5px;
                    background-color: #f9f9f9;
                ">
                    <p><strong>Ім'я:</strong> ${contact.name}</p>
                    <p><strong>Номер:</strong> ${contact.number}</p>
                    <p><strong>ID:</strong> ${contact.id}</p>
                    <button class="delete-btn" data-id="${contact.id}">Видалити</button>
                </div>
            `);

            contactContainer.append(contactElement);
        });

        
        $('.delete-btn').on('click', function () {
            const idToDelete = $(this).data('id').toString();
            let contacts = getContacts();
            contacts = contacts.filter(contact => contact.id !== idToDelete);
            saveContacts(contacts);
            renderContacts();
        });
    }


    addButton.on('click', function () {
        const name = nameInput.val().trim();
        const number = numberInput.val().trim();
        const id = idInput.val().trim();

        if (!name || !number || !id) {
            alert('Помилка! заповни усі поля');
            return;
        }

        const contacts = getContacts();

        const isDuplicateId = contacts.some(contact => contact.id === id);
        if (isDuplicateId) {
            alert('Помилка! такий ID вже існує');
            return;
        }

        const newContact = { name, number, id };
        contacts.push(newContact);
        saveContacts(contacts);
        renderContacts();

        
        nameInput.val('');
        numberInput.val('');
        idInput.val('');
    });

    
    renderContacts();
});
