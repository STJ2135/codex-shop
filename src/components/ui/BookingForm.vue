<script setup lang="ts">
import { nextTick, onBeforeUnmount, reactive, ref } from 'vue'
import { useToast } from '@/composables/useToast'
import type { BookingFormState } from '@/types/content'

const toDateInputValue = (date: Date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const minDate = toDateInputValue(new Date())
const form = reactive<BookingFormState>({
  date: minDate,
  time: '',
  guests: '',
  name: '',
  phone: '',
  note: '',
})

const formRef = ref<HTMLFormElement>()
const phoneRef = ref<HTMLInputElement>()
const submitting = ref(false)
const success = ref(false)
const { showToast } = useToast()
let successTimer: number | undefined
let resetTimer: number | undefined

const handlePhoneInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  form.phone = input.value
  input.setCustomValidity('')
}

const validatePhone = () => {
  if (!phoneRef.value) return
  const digits = form.phone.replace(/\D/g, '')
  const valid = digits.length >= 10 && digits.length <= 13
  phoneRef.value.setCustomValidity(valid ? '' : '请输入有效的联系电话')
}

const validateDate = (event: Event) => {
  const input = event.target as HTMLInputElement
  input.setCustomValidity(input.value < minDate ? '请选择今天或之后的日期' : '')
}

const resetForm = () => {
  Object.assign(form, {
    date: toDateInputValue(new Date()),
    time: '',
    guests: '',
    name: '',
    phone: '',
    note: '',
  })
  success.value = false
  nextTick(() => {
    phoneRef.value?.setCustomValidity('')
    formRef.value?.querySelector<HTMLInputElement>('input[type="date"]')?.setCustomValidity('')
  })
}

const submitBooking = () => {
  validatePhone()
  const dateInput = formRef.value?.querySelector<HTMLInputElement>('input[type="date"]')
  dateInput?.setCustomValidity(form.date < minDate ? '请选择今天或之后的日期' : '')

  if (!formRef.value?.checkValidity()) {
    formRef.value?.reportValidity()
    return
  }

  submitting.value = true
  window.clearTimeout(successTimer)
  window.clearTimeout(resetTimer)

  // Replace this timeout with the real reservation API call.
  successTimer = window.setTimeout(() => {
    const selectedDate = new Date(`${form.date}T12:00:00`)
    const formattedDate = new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(selectedDate)

    submitting.value = false
    success.value = true
    showToast(`已收到 ${formattedDate} 的预订申请`)
    resetTimer = window.setTimeout(resetForm, 4500)
  }, 850)
}

onBeforeUnmount(() => {
  window.clearTimeout(successTimer)
  window.clearTimeout(resetTimer)
})
</script>

<template>
  <form ref="formRef" id="bookingForm" class="booking-form" novalidate @submit.prevent="submitBooking">
    <div class="form-heading">
      <div><span>BOOK A TABLE</span><h3>预订座位</h3></div>
      <span class="form-status"><i></i> 可预订</span>
    </div>
    <div class="form-row">
      <label class="field">
        <span>就餐日期</span>
        <input v-model="form.date" type="date" name="date" id="bookingDate" :min="minDate" required @input="validateDate">
      </label>
      <label class="field">
        <span>到店时间</span>
        <select v-model="form.time" name="time" required>
          <option value="">请选择</option>
          <option>11:30</option><option>12:00</option><option>12:30</option><option>13:00</option>
          <option>17:30</option><option>18:00</option><option>18:30</option><option>19:00</option><option>19:30</option><option>20:00</option>
        </select>
      </label>
    </div>
    <div class="form-row">
      <label class="field">
        <span>用餐人数</span>
        <select v-model="form.guests" name="guests" required>
          <option value="">请选择</option>
          <option>1 位</option><option>2 位</option><option>3 位</option><option>4 位</option><option>5 位</option><option>6 位</option>
        </select>
      </label>
      <label class="field">
        <span>怎么称呼</span>
        <input v-model.trim="form.name" type="text" name="name" placeholder="您的姓名" autocomplete="name" required>
      </label>
    </div>
    <label class="field full-field">
      <span>联系电话</span>
      <input ref="phoneRef" :value="form.phone" type="tel" name="phone" placeholder="便于我们确认预订" inputmode="tel" autocomplete="tel" required @input="handlePhoneInput" @blur="validatePhone">
    </label>
    <label class="field full-field">
      <span>特别需求 <small>选填</small></span>
      <input v-model.trim="form.note" type="text" name="note" placeholder="如：生日、忌口、靠窗座位">
    </label>
    <button class="button button-light button-submit" type="submit" :disabled="submitting">
      {{ submitting ? '正在确认...' : '确认预订' }}
      <svg v-if="!submitting" aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    </button>
    <p class="form-footnote">提交即表示您同意我们为本次预订联系您。不会发送营销信息。</p>
    <div v-if="success" class="form-success" role="status">
      <span>✓</span>
      <div><strong>预订申请已收到</strong><p>我们会在 10 分钟内致电确认。</p></div>
    </div>
  </form>
</template>








