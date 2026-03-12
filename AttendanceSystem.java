import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;

class Student {
    String name;
    String status;

    Student(String name, String status) {
        this.name = name;
        this.status = status;
    }
}

public class AttendanceSystem {

    static ArrayList<Student> students = new ArrayList<>();

    // Add Student
    public static void addStudent(String name, String status) {
        students.add(new Student(name, status));
        System.out.println("Student added successfully.");
    }

    // Display Students
    public static void displayStudents() {
        if (students.size() == 0) {
            System.out.println("No attendance records.");
            return;
        }

        for (Student s : students) {
            System.out.println(s.name + " - " + s.status);
        }
    }

    // Search Student (Linear Search)
    public static void searchStudent(String name) {
        for (Student s : students) {
            if (s.name.equalsIgnoreCase(name)) {
                System.out.println("Student Found: " + s.name + " - " + s.status);
                return;
            }
        }
        System.out.println("Student not found.");
    }

    // Sort Students (Sorting)
    public static void sortStudents() {
        Collections.sort(students, new Comparator<Student>() {
            public int compare(Student s1, Student s2) {
                return s1.name.compareToIgnoreCase(s2.name);
            }
        });

        System.out.println("Students sorted by name.");
    }

    // Clear All Records
    public static void clearAll() {
        students.clear();
        System.out.println("All records deleted.");
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int choice;

        do {
            System.out.println("\nDigital Student Attendance System");
            System.out.println("1. Add Student");
            System.out.println("2. Display Attendance");
            System.out.println("3. Search Student");
            System.out.println("4. Sort Students");
            System.out.println("5. Clear All Records");
            System.out.println("6. Exit");

            System.out.print("Enter choice: ");
            choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {

                case 1:
                    System.out.print("Enter Student Name: ");
                    String name = sc.nextLine();

                    System.out.print("Enter Status (Present/Absent): ");
                    String status = sc.nextLine();

                    addStudent(name, status);
                    break;

                case 2:
                    displayStudents();
                    break;

                case 3:
                    System.out.print("Enter student name to search: ");
                    String searchName = sc.nextLine();
                    searchStudent(searchName);
                    break;

                case 4:
                    sortStudents();
                    break;

                case 5:
                    clearAll();
                    break;

                case 6:
                    System.out.println("Exiting program...");
                    break;

                default:
                    System.out.println("Invalid choice.");
            }

        } while (choice != 6);

        sc.close();
    }
}