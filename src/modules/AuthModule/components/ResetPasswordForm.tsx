import Box from '@cavilha/box';
import { yupResolver } from '@hookform/resolvers';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { hasUpperCaseRegex, hasLowerCaseRegex, hasNumbersRegex, hasNonalphasRegex } from 'utils';
import { resetUserPassword } from 'services/mockyio';
import { passwordRegex } from 'utils/regex';
import * as yup from 'yup';

/**
 * Types
 */
type ResetPasswordFormProps = {
  token?: string;
};

// type IFormInputs = {
//   password: string;
//   passwordConfirm: string;
// };

// type IFormControls = {
//   loading: boolean;
//   passwordStrengthModal: boolean;
//   passwrodStrengtCriteria: {
//     hasUpperCase: boolean;
//     hasLowerCase: boolean;
//     hasNumbers: boolean;
//     hasNonalphas: boolean;
//     hasMoreThanEightLetters: boolean;
//   };
// };

/**
 * Yup Schema
 */

// const schema = yup.object().shape({
//   password: yup.string().required('Campo obrigatório!').matches(passwordRegex, 'Senha inválida'),
//   passwordConfirm: yup
//     .string()
//     .required('Campo obrigatório!')
//     .oneOf([yup.ref('password')], 'As senhas não combinam!'),
// });

/**
 * Component
 */

const ResetPasswordForm = ({ token }: ResetPasswordFormProps): JSX.Element => (
  // const { handleSubmit, setValue, trigger, errors, control } = useForm<IFormInputs>({
  //   mode: 'onBlur',
  //   resolver: yupResolver(schema),
  //   defaultValues: {
  //     password: '',
  //     passwordConfirm: '',
  //   },
  // });

  // const [formControls, setFormControls] = useState<IFormControls>({
  //   loading: false,
  //   passwordStrengthModal: false,
  //   passwrodStrengtCriteria: {
  //     hasUpperCase: false,
  //     hasLowerCase: false,
  //     hasNumbers: false,
  //     hasNonalphas: false,
  //     hasMoreThanEightLetters: false,
  //   },
  // });

  // async function onSubmit(data: IFormInputs) {
  //   setFormControls({
  //     ...formControls,
  //     loading: true,
  //   });

  //   if (!token) return;

  //   try {
  //     const response = await resetUserPassword({
  //       password: data.password,
  //       token,
  //     });

  //     if (response.status === 200) {
  //       // Update Auth Context
  //     }
  //   } catch (error) {
  //     setFormControls({
  //       ...formControls,
  //       loading: false,
  //     });
  //   }
  // }

  // function handlePasswordStrengthModal(callTrigger: boolean) {
  //   if (callTrigger) {
  //     trigger('password');
  //   }

  //   setFormControls({
  //     ...formControls,
  //     passwordStrengthModal: !formControls.passwordStrengthModal,
  //   });
  // }

  // function handleInputChange({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>) {
  //   setValue('password', value);

  //   setFormControls({
  //     ...formControls,
  //     passwrodStrengtCriteria: {
  //       hasUpperCase: hasUpperCaseRegex.test(value),
  //       hasLowerCase: hasLowerCaseRegex.test(value),
  //       hasNumbers: hasNumbersRegex.test(value),
  //       hasNonalphas: hasNonalphasRegex.test(value),
  //       hasMoreThanEightLetters: value.length > 8,
  //     },
  //   });
  // }

  <form>
    {/*
       <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
        name="password"
        control={control}
        defaultValue=""
        render={props => (
          <TextInput
            {...props}
            as="input"
            hasError={!!errors.password?.message}
            errorMessage={errors.password?.message}
            disabled={formControls.loading}
            label="Senha"
            type="password"
            onBlur={() => handlePasswordStrengthModal(true)}
            onFocus={() => handlePasswordStrengthModal(false)}
            onChange={e => handleInputChange(e)}
          />
        )}
      /> */}

    <Box css={{ mb: 10 }}>
      {/* <Controller
          name="passwordConfirm"
          type="password"
          control={control}
          as={<in></in>}
          hasError={!!errors.passwordConfirm?.message}
          errorMessage={errors.passwordConfirm?.message}
          disabled={formControls.loading}
          defaultValue=""
          label="Confirmar senha"
        /> */}
    </Box>

    <button aria-label="Entrar" type="submit" />
  </form>
);
export default ResetPasswordForm;
