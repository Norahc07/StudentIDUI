import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

// These lines have been updated to reference local assets.
// Make sure you have 'enverga-logo.png' and 'profile.png' in your 'assets' folder.
const universitySeal = require('./assets/enverga-logo.png');
const studentPhoto = require('./assets/profile1.png');

// We'll use this data to populate the UI.
const studentData = {
  university: "MANUEL S. ENVERGA\nUNIVERSITY FOUNDATION",
  location: "LUCENA CITY, PHILIPPINES",
  website: "www.mseuf.edu.ph",
  name: "LUIGI D. AMARILLO",
  studentNumber: "A22-34197",
  course: "Bachelor of Science in\nInformation Technology",
  age: "21",
  sex: "Male",
  address: "Mauban, Quezon",
};

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.cardContainer}>
        {/* Top Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerTextUniversity}>{studentData.university}</Text>
          <Text style={styles.headerTextLocation}>{studentData.location}</Text>
          <View style={styles.websiteContainer}>
            <Text style={styles.websiteText}>{studentData.website}</Text>
          </View>
        </View>

        {/* Middle Content Section */}
        <View style={styles.content}>
          {/* University Seal and Validation */}
          <View style={styles.sealAndInfoContainer}>
            <Image source={universitySeal} style={styles.sealImage} />
            <View style={styles.validationBox}>
              <Text style={styles.validationText}>VALID FOR</Text>
              <Text style={styles.validationTextLarge}>1ST SEM</Text>
              <Text style={styles.validationTextSmall}>S.Y. 2025-2026</Text>
            </View>
          </View>

          {/* Student Photo and Details */}
          <View style={styles.studentInfoContainer}>
            <Image source={studentPhoto} style={styles.studentImage} />
            <View style={styles.studentDetails}>
              <Text style={styles.detailText}>Age: {studentData.age}</Text>
              <Text style={styles.detailText}>Sex: {studentData.sex}</Text>
              <Text style={styles.detailText}>Address: {studentData.address}</Text>
            </View>
          </View>
        </View>

        {/* Name and Student Number Section */}
        <View style={styles.nameAndNumberSection}>
          <Text style={styles.nameText}>{studentData.name}</Text>
          <Text style={styles.studentNumberTextLarge}>{studentData.studentNumber}</Text>
          <Text style={styles.studentNumberTextSmall}>Student Number</Text>
        </View>

        {/* Bottom Footer Section */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>{studentData.course}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
  },
  header: {
    width: '100%',
    backgroundColor: '#821626',
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  headerTextUniversity: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: 24,
  },
  headerTextLocation: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  websiteContainer: {
    backgroundColor: '#a32031',
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 15,
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
  websiteText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
    paddingBottom: 0,
    backgroundColor: '#fff',
  },
  sealAndInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  sealImage: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  validationBox: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  validationText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  validationTextLarge: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  validationTextSmall: {
    fontSize: 12,
  },
  studentInfoContainer: {
    alignItems: 'flex-end',
    flex: 1,
    marginLeft: 20,
  },
  studentImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  studentDetails: {
    marginTop: 15,
    width: '100%',
    alignItems: 'flex-start',
  },
  detailText: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: '500',
  },
  nameAndNumberSection: {
    width: '100%',
    padding: 25,
    paddingTop: 15,
    marginTop: 20,
    backgroundColor: '#821626',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  nameText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  studentNumberTextLarge: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  studentNumberTextSmall: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    backgroundColor: '#777777',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginTop: -20,
  },
  footerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 22,
  },
});
