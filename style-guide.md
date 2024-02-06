/_ Default styles for all screen sizes _/
.form-container {
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
}

.form-content {
flex: 1;
}

.conversation-image {
max-width: 100%;
}

/_ Styles for mobile devices _/
@media (max-width: 767px) {
.form-container {
flex-direction: column;
}

.conversation-image {
margin-bottom: 20px;
}
}

/_ Styles for desktop devices _/
@media (min-width: 768px) {
.form-container {
flex-direction: row;
}

.form-content {
margin-right: 20px;
}
}
