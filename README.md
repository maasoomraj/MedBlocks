# MedBlocks

MedBlock is a <strong>simple and easy to use</strong>WebApp.We help <strong>patients</strong> from around the world to share their ,pre medical records efficiently, reliably and securely, to the doctor he wants to consult. We use <strong>Blockchain</strong> to securely transfer patient data to the doctor the patient's wishes to share. The patient also has option to revoke the access to his Pre-Medical recoed. <br>

## Work Flow

### Patient End User

- Each patient registers through blockchain which asks for name, Age , Previous medical record etc.

- Patient gets verified by admin (say a hospital).

- If verified he can login into his portal and can see his details and the list of doctors(he can further see more details of doctor).

- Finally he can send his Previous Medical reports which is secured by blockchain network(in our case rinkeby blockchain test network).

- That reports will only be visible to the doctor patient wants, the patient can also revoke the access of doctor to view his medical Records.

### Doctor End User

- Each doctor registers through blockchain which asks for Name, Age , Previous experience etc.

- Doctor gets verified by admin (say a hospital). Admin can also add additional details about the doctor.

- If verified the doctor can login into his portal to view his detail.

- If the doctor is granted access to a medical record by a patient(which is transaction of patient's pre-medical record via blockchain), only then he can view the patient's record.

- Finally the doctor can add comments(or add record) which will be updated in the patients's record and when next time the patient grants the access to any other doctor, he can see the record added by all previous doctors.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
