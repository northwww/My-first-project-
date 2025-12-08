<?php
abstract class User {
    private $name;
    private $email;
    public function __construct($name, $email) {
        $this->name = $name;
        $this->email = $email;
    }

    abstract public function getRole();
    public function getName() {
        return $this->name;
    }
    public function setName($name) {
        $this->name = $name;
    }
    public function getEmail() {
        return $this->email;
    }
    public function setEmail($email) {
        $this->email = $email;
    }
}

class Student extends User {
    private $group;
    public function __construct($name, $email, $group) {
        parent::__construct($name, $email);
        $this->group = $group;
    }
    public function getRole() {
        return "Студент";
    }
    public function getGroup() {
        return $this->group;
    }
    public function setGroup($group) {
        $this->group = $group;
    }
}

class Teacher extends User {
    private $subject;
    public function __construct($name, $email, $subject) {
        parent::__construct($name, $email);
        $this->subject = $subject;
    }
    public function getRole() {
        return "Викладач";
    }
    public function getSubject() {
        return $this->subject;
    }
    public function setSubject($subject) {
        $this->subject = $subject;
    }
}

$student = new Student("Савін Єгор", "egorsavini943@gmail.com", "КН-24");
$teacher = new Teacher("Костянтин Сурков", "kostiantinsurkov228pro@gmail.com", "Програмування");

echo "Ім’я: " . $student->getName() . PHP_EOL;
echo "Email: " . $student->getEmail() . PHP_EOL;
echo "Роль: " . $student->getRole() . PHP_EOL;
echo "Група: " . $student->getGroup() . PHP_EOL . PHP_EOL;

echo "Ім’я: " . $teacher->getName() . PHP_EOL;
echo "Email: " . $teacher->getEmail() . PHP_EOL;
echo "Роль: " . $teacher->getRole() . PHP_EOL;
echo "Предмет: " . $teacher->getSubject() . PHP_EOL;
?>
