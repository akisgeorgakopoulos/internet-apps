# internet-apps
Το θέμα που θα υλοποιήσω είναι το COVID-01.

ΛΕΙΤΟΥΡΓΙΚΑ ΧΑΡΑΚΤΗΡΙΣΤΙΚΑ

Η διαδικτυακή εφαρμογή θα παρουσιάζει τους δέκα συγγραφείς με τα περισσότερα άρθρα γύρω από μια συγκεκριμένη 
Ασθένεια (εκτός του COVID 19) καθώς και ποια είναι αυτά. Για να επιτευχθεί αυτό θα ανατρέχω με queries κάθε φορά 
στην βάση δεδομένων που θα περιέχει το title, abstract, publish_time και authors. Η πηγή των δεδομένων θα είναι το
αρχείο metadata.csv το οποίο βρίσκεται στην σελίδα https://www.semanticscholar.org/cord19.
To input θα είναι το όνομα της ασθένειας και το output θα είναι οι 10 συγγραφείς με τα περισσότερα άρθρα και ποια 
είναι αυτά. Επίσης, θα δημιουργήσω ιστογράμμα με την ημερομηνία και τον αριθμό των άρθρων που έχουν δημοσιευτεί για 
καθέναν από αυτούς.

ΤΕΧΝΟΛΟΓΙΕΣ

Για την βάση δεδομένων θα χρησιμοποιήσω MongoDB, για το backend Node js με Express js και για το κομμάτι του
frontend react js.