<template>
  1231312
    <xx-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="120px"
            class="demo-ruleForm"
            :size="formSize"
            status-icon
    >
        <xx-form-item label="Activity name" prop="name">
            <xx-input v-model="ruleForm.name"/>
        </xx-form-item>

        <xx-form-item>
            <button type="button" @click="submitForm(ruleFormRef)">Submit</button>
            <button type="button" @click="resetForm(ruleFormRef)">Reset</button>
        </xx-form-item>
    </xx-form>
</template>

<script lang="ts" setup>

import {reactive, ref} from 'vue'
import type {FormRules} from '@/components/form/src/types.ts'
import XxForm from "@/components/form/src/xx-form.vue";
import XxFormItem from "@/components/form/src/xx-form-item.vue";
import XxInput from "@/components/input/xx-input.vue";
import type {FormInstance} from "@/components/form";

interface RuleForm {
    name: string
}

const formSize = ref('default')
const ruleFormRef = ref()
const ruleForm = reactive<RuleForm>({
    name: 'Hello',
})

const rules = reactive<FormRules<RuleForm>>({
    name: [
        {required: true, message: 'Please input Activity name', trigger: 'blur'},
        {min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur'},
    ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>
