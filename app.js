const input = document.querySelector('#input');
        const button = document.querySelector('#btn');
        const ol = document.querySelector('ol');
        button.className = "rainbowButton";

        //Create delete button
        function buttonDelete(parent) {
            const delButton = parent.appendChild(document.createElement('button'));
            delButton.appendChild(document.createTextNode('Delete?'));
            delButton.className = "delete";
            delButton.addEventListener('click', function () {
                this.parentElement.remove();
            })
        };

        //Create li element and push in ol element.
        function createElement() {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(input.value));
            li.className = "list-type";
            buttonDelete(li);
            li.addEventListener('click', function (event) {
                event.target.classList.toggle('done');
            })
            ol.appendChild(li);
            input.value = "";
        };


        // Create input value length
        function inputLength() {
            return input.value.length;
        }

        // Create click event
        function click() {
            if (inputLength() > 0) {
                createElement();
            }
        }

        // Create key press 'Enter' event
        function key(event) {
            if (inputLength() > 0 && event.keyCode === 13) {
                createElement();
            }
        }

        button.addEventListener('click', click);
        input.addEventListener('keypress', key);