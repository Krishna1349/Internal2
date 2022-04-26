import '../assets/css/add-task-popup.css';

function AddTask(){
    
    return (
        <form class="form">
					<p class="fieldset">
						<label class="image-replace username" for="signup-username">Username</label>
						<input class="full-width has-padding has-border" id="signup-username" type="text" placeholder="Username"/>
						<span class="error-message">Your username can only contain numeric and alphabetic symbols!</span>
					</p>

					<p class="fieldset">
						<label class="image-replace email" for="signup-email">E-mail</label>
						<input class="full-width has-padding has-border" id="signup-email" type="email" placeholder="E-mail"/>
						<span class="error-message">Enter a valid email address!</span>
					</p>

					<p class="fieldset">
						<label class="image-replace password" for="signup-password">Password</label>
						<input class="full-width has-padding has-border" id="signup-password" type="password"  placeholder="Password"/>
						<a href="#0" class="hide-password">Show</a>
						<span class="error-message">Your password has to be at least 6 characters long!</span>
					</p>

					<p class="fieldset">
						<input type="checkbox" id="accept-terms"/>
						<label for="accept-terms">I agree to the <a class="accept-terms" href="#0">Terms</a></label>
					</p>

					<p class="fieldset">
						<input class="full-width has-padding" type="submit" value="Create account"/>
					</p>
				</form>
    );
}

export default AddTask;