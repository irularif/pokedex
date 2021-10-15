import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  telp: yup.string(),
});

const Form = () => {
  const {
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      name: "asd",
      email: "",
      telp: "",
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <View style={Styles.form}>
      <Text style={Styles.title}>Test Form</Text>
      <Text style={Styles.label}>Name</Text>
      <TextInput
        style={Styles.input}
        onChangeText={(text) =>
          setValue("name", text, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
          })
        }
        value={getValues("name")}
      />
      {!!errors.name?.message && (
        <Text style={Styles.error}>{errors.name?.message}</Text>
      )}

      <Text style={Styles.label}>Email</Text>
      <TextInput
        style={Styles.input}
        onChangeText={(text) =>
          setValue("email", text, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
          })
        }
        value={getValues("email")}
      />
      {!!errors.email?.message && (
        <Text style={Styles.error}>{errors.email?.message}</Text>
      )}

      <Text style={Styles.label}>Telp</Text>
      <TextInput
        style={Styles.input}
        onChangeText={(text) =>
          setValue("telp", text, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
          })
        }
        value={getValues("telp")}
      />
      {!!errors.telp?.message && (
        <Text style={Styles.error}>{errors.telp?.message}</Text>
      )}

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleSubmit(onSubmit)}
        style={Styles.button}
      >
        <Text style={Styles.buttonTitle}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  form: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    marginBottom: 30,
  },
  label: {
    padding: 5,
    color: "#343A40",
  },
  error: {
    fontSize: 12,
    color: "#FF4C29",
  },
  input: {
    borderRadius: 8,
    borderColor: "#D5D5D5",
    borderWidth: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#113CFC",
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    color: "#fff",
  },
});

export default Form;
